import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "ID card printers, card dispensers and printer ribbons supplied by Mc-Fidel ID & Safety Technocrats Limited.",
};

const EMAIL = "mosesfidel@yahoo.com";

// Edit products here. Put images in /public/Images.
// Only name and src are required; features, size and weight are optional.
const products = [
  {
    name: "Desktop Rewrite Card Printer",
    type: "Rewritable card printer",
    src: "/Images/printer 1.jpg",
    features: [
      "Compact and lightweight design",
      "Direct thermal printing and erasing on rewritable material",
      "Single-sided printing",
      "Manual feeding",
    ],
    size: "244 × 160 × 208 mm (L × W × H)",
    weight: "4.5 kg",
  },
  {
    name: "SEAORY R330",
    type: "Desktop dual-sided ID card printer",
    src: "/Images/printer 5.jpg",
    features: [
      "High-resolution dye-sublimation colour printing for professional-level results",
      "Edge-to-edge printing across the entire card",
      "Set the card input and output direction",
      "Dual-sided printing",
      "Alarm for no card and defective card slot",
    ],
    size: "568 × 272 × 398 mm",
    weight: "12 kg",
  },
  {
    name: "SEAORY E80E",
    type: "Portable card dispenser",
    src: "/Images/printer 9.jpg",
    features: [
      "Automatic batch card feeding",
      "Supports manual card feeding",
      "Holds the card on output",
      "Automatically swallows the card on timeout",
    ],
    size: "517 × 220 × 278 mm",
    weight: "11.5 kg",
  },
  { name: "ID card printer 4", src: "/Images/printer3.jpg" },
  { name: "ID card printer 5", src: "/Images/printer4.jpg" },
];

// Edit ribbons here. Only name is required.
// src (image), type, compatible (list of printers) and prints are optional.
const ribbons = [
  {
    name: "Ribbon 1",
    // type: "Colour ribbon",
    // compatible: ["SEAORY R330"],
    // prints: "250 prints",
    // src: "/Images/ribbon 1.jpg",
  },
  { name: "Ribbon 2" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]";

const quoteHref = (name) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${name}`)}`;

export default function ProductPage() {
  return (
    <main className="text-white">
      <header className="bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">Our products</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            ID card printers, card dispensers and printer ribbons for businesses, schools and
            institutions. Contact us for prices and availability.
          </p>
          <a
            href="#ribbons"
            className={`mt-8 inline-block rounded-md border border-[#FFC400] px-5 py-3 font-semibold text-[#FFC400] hover:bg-[#0A0A0A] ${focusRing}`}
          >
            Jump to ribbons
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">Printers and dispensers</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <li
              key={p.src}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#161616]"
            >
              <div className="relative aspect-[4/3] bg-[#2A2A2A]">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>

              <div className="flex flex-1 flex-col border-t-4 border-[#FFC400] p-5">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.type && <p className="mt-1 text-sm text-[#A3A3A3]">{p.type}</p>}

                {p.features && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#E5E5E5]">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(p.size || p.weight) && (
                  <dl className="mt-5 divide-y divide-[#2A2A2A] border-t border-[#2A2A2A] text-sm">
                    {p.size && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#A3A3A3]">Size</dt>
                        <dd className="text-right font-medium">{p.size}</dd>
                      </div>
                    )}
                    {p.weight && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#A3A3A3]">Weight</dt>
                        <dd className="font-medium">{p.weight}</dd>
                      </div>
                    )}
                  </dl>
                )}

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
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="ribbons" className="scroll-mt-20 border-t border-[#2A2A2A] bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Printer ribbons</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-[#A3A3A3]">
            Genuine ribbons to keep your card printer running. Tell us your printer model and we will
            supply the right one.
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ribbons.map((r) => (
              <li
                key={r.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A]"
              >
                <div className="relative aspect-[4/3] bg-[#2A2A2A]">
                  {r.src ? (
                    <Image
                      src={r.src}
                      alt={r.name}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[#A3A3A3]">
                      Photo coming soon
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col border-t-4 border-[#FFC400] p-5">
                  <h3 className="text-xl font-semibold">{r.name}</h3>
                  {r.type && <p className="mt-1 text-sm text-[#A3A3A3]">{r.type}</p>}

                  {(r.compatible || r.prints) && (
                    <dl className="mt-5 divide-y divide-[#2A2A2A] border-t border-[#2A2A2A] text-sm">
                      {r.compatible && (
                        <div className="flex justify-between gap-4 py-2">
                          <dt className="text-[#A3A3A3]">Fits</dt>
                          <dd className="text-right font-medium">{r.compatible.join(", ")}</dd>
                        </div>
                      )}
                      {r.prints && (
                        <div className="flex justify-between gap-4 py-2">
                          <dt className="text-[#A3A3A3]">Yield</dt>
                          <dd className="font-medium">{r.prints}</dd>
                        </div>
                      )}
                    </dl>
                  )}

                  <div className="mt-auto pt-6">
                    <a
                      href={quoteHref(r.name)}
                      className={`inline-block rounded-md bg-[#FFC400] px-4 py-2 font-semibold text-black hover:bg-[#E6B000] ${focusRing}`}
                    >
                      Request a quote
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}