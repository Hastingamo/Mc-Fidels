import Link from "next/link";

export const metadata = {
  title: "SEAORY S16 and S18 ID Card Printers | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "Compare the SEAORY S16 single-sided and S18 automatic dual-sided dye-sublimation ID card printers.",
};

const EMAIL = "mosesfidel@yahoo.com";

const printers = [
  {
    name: "SEAORY S16",
    tagline: "Single-sided",
    summary:
      "Suited to organisations that mainly print one-sided ID cards and want a compact, economical solution.",
  },
  {
    name: "SEAORY S18",
    tagline: "Automatic dual-sided",
    summary:
      "Better suited to organisations that need automatic double-sided printing, which reduces manual card handling and improves productivity.",
  },
];

const specs = [
  ["Printing capability", "Single-sided", "Automatic dual-sided"],
  ["Printing technology", "Dye-sublimation direct-to-card", "Dye-sublimation direct-to-card"],
  [
    "Resolution",
    "300 × 300, 300 × 600 or 300 × 1200 dpi",
    "300 × 300, 300 × 600 or 300 × 1200 dpi",
  ],
  ["Monochrome speed", "3–5 sec per card", "3–5 sec single-sided; 7–12 sec double-sided"],
  ["Full-colour (YMCKO) speed", "20 sec per card", "20 sec single-sided; 42 sec double-sided"],
  ["Input hopper", "100 cards", "100 cards"],
  ["Output hopper", "50 cards", "50 cards"],
  ["Memory", "128 MB", "128 MB"],
  ["Connectivity", "USB and Ethernet", "USB and Ethernet"],
  ["Card size", "CR80 (85.60 × 53.98 mm)", "CR80 (85.60 × 53.98 mm)"],
  ["Card thickness", "0.3–1.05 mm", "0.3–1.05 mm"],
  ["Card material", "PVC / Composite PVC", "PVC / Composite PVC"],
  ["Dimensions", "293 × 174 × 211.6 mm", "383 × 174 × 208 mm"],
  ["Weight", "4.9 kg", "6.8 kg"],
  ["Power supply", "AC 100–240 V, 50/60 Hz", "AC 100–240 V, 50/60 Hz"],
];

const features = [
  "High-definition colour and monochrome printing",
  "Edge-to-edge card printing",
  "User-friendly LCD display with multilingual support",
  "Manual card feeding",
  "USB and Ethernet connectivity",
  "iCARDE card design software",
  "Database connectivity for card personalisation",
  "Low-noise printing",
  "Optional card encoding modules",
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]";

const quoteHref = (name) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${name}`)}`;

export default function SeaoryS16S18Page() {
  return (
    <main className="text-white">
      <header className="bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            href="/Product"
            className={`text-sm font-medium text-[#FFC400] underline underline-offset-4 ${focusRing}`}
          >
            Back to products
          </Link>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            SEAORY S16 and S18 ID card printers
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            Two dye-sublimation direct-to-card printers. Choose the S16 for single-sided printing or the
            S18 for automatic dual-sided printing.
          </p>
        </div>
      </header>

      {/* Which one */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Which one is right for you?</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {printers.map((p) => (
            <li
              key={p.name}
              className="flex flex-col rounded-2xl border border-[#2A2A2A] border-t-4 border-t-[#FFC400] bg-[#161616] p-6"
            >
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-[#A3A3A3]">{p.tagline}</p>
              <p className="mt-4 leading-relaxed text-[#E5E5E5]">{p.summary}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={quoteHref(p.name)}
                  className={`inline-block rounded-md bg-[#FFC400] px-4 py-2 font-semibold text-black hover:bg-[#E6B000] ${focusRing}`}
                >
                  Request a quote
                </a>
                <Link
                  href="/Product/Warranty"
                  className={`inline-block rounded-md border border-[#FFC400] px-4 py-2 font-semibold text-[#FFC400] hover:bg-[#0A0A0A] ${focusRing}`}
                >
                  Warranty
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison table */}
      <section className="border-t border-[#2A2A2A] bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Specifications</h2>
          <p className="mt-3 text-sm text-[#A3A3A3]">Rows marked in yellow are where the two printers differ.</p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#2A2A2A]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">SEAORY S16 and S18 specification comparison</caption>
              <thead className="bg-[#0A0A0A]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-[#A3A3A3]">
                    Specification
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    SEAORY S16
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    SEAORY S18
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([label, s16, s18]) => {
                  const differs = s16 !== s18;
                  return (
                    <tr key={label} className="border-t border-[#2A2A2A]">
                      <th
                        scope="row"
                        className={`px-4 py-3 font-medium text-[#A3A3A3] ${
                          differs ? "border-l-4 border-l-[#FFC400]" : "border-l-4 border-l-transparent"
                        }`}
                      >
                        {label}
                      </th>
                      <td className="px-4 py-3 text-[#E5E5E5]">{s16}</td>
                      <td className="px-4 py-3 text-[#E5E5E5]">{s18}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="bg-[#FFC400] text-black">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-12">
          <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
            Not sure which printer fits your volume? Ask us.
          </h2>
          <Link
            href="/Contact"
            className="rounded-md bg-black px-6 py-3 font-semibold text-[#FFC400] hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}