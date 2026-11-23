import { NextResponse } from "next/server";
import { z } from "zod"; // npm i zod

// 1. Validate on the server
const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  telephone: z.string().trim().max(30).regex(/^[0-9+()\-\s]*$/).optional().default(""),
  country: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(5).max(2000),
  website: z.string().max(0).optional(), // honeypot
});

// 2. Simple in-memory rate limit (use Upstash Redis in production)
const hits = new Map();
const LIMIT = 5;
const WINDOW = 10 * 60 * 1000;

function rateLimited(ip) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || rec.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW });
    return false;
  }
  rec.count++;
  return rec.count > LIMIT;
}

// 3. Escape HTML before putting input in an email
const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  }

  const raw = await req.text();
  if (raw.length > 10_000) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let json;
  try {
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your details." }, { status: 400 });
  }
  const d = parsed.data;

  // Honeypot filled: fake success
  if (d.website) return NextResponse.json({ ok: true });

  // 4. Send email via Resend (key stays in server env)
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      reply_to: d.email,
      subject: `New contact from ${d.name.replace(/[\r\n]/g, " ")}`,
      html: `
        <p><b>Name:</b> ${esc(d.name)}</p>
        <p><b>Email:</b> ${esc(d.email)}</p>
        <p><b>Telephone:</b> ${esc(d.telephone)}</p>
        <p><b>Country:</b> ${esc(d.country)}</p>
        <p><b>Message:</b><br>${esc(d.message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
console.log("KEY:", process.env.RESEND_API_KEY?.slice(0, 6));
    return NextResponse.json({ error: "Could not send message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}