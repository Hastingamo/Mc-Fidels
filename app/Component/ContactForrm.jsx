"use client";
import { useState } from "react";

const field =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-[#FFC400] focus:outline-none focus:ring-2 focus:ring-[#FFC400]/40";

const label = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-neutral-600";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl shadow-black/5 sm:p-8"
    >
      {/* Gold accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#FFC400]" />

      <header className="mb-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-black">
          Get in touch
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Please leave your information here and we will be in touch with you shortly.
        </p>
      </header>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>Name</label>
            <input id="name" name="name" placeholder="John Doe" required minLength={2} maxLength={80} autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className={label}>Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required maxLength={120} autoComplete="email" className={field} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="telephone" className={label}>Telephone</label>
            <input id="telephone" name="telephone" type="tel" placeholder="+234 800 000 0000" maxLength={30} autoComplete="tel" className={field} />
          </div>
          <div>
            <label htmlFor="country" className={label}>Country</label>
            <input id="country" name="country" placeholder="Nigeria" maxLength={60} autoComplete="country-name" className={field} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={label}>Message</label>
          <textarea id="message" name="message" placeholder="How can we help?" required minLength={5} maxLength={2000} rows={5} className={`${field} resize-none`} />
        </div>

        {/* Honeypot: hidden from humans, bots fill it */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#FFC400] hover:text-black active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Contact us"}
        </button>

        <div aria-live="polite">
          {status === "sent" && (
            <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Thanks! We will be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}