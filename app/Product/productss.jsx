"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EMAIL = "mosesfidel@yahoo.com";

// Each item needs a `category` ("Printers" or "Ribbons") and a unique `name`.
// Optional: type, src, features (array), size, weight, description, colours, panels, half.
const items = [
  // ---------- Printers ----------
  {
    name: "Seaory R600M",
    category: "Printers",
    type: "Embedded duplex card printer",
    src: "/Images/seaory-r600m.jpg",
  },
  {
    name: "Seaory R660",
    category: "Printers",
    type: "Desktop duplex ID card printer",
    src: "/Images/seaory-r660.jpg",
  },
  {
    name: "Seaory R330",
    category: "Printers",
    type: "Desktop dual-sided ID card printer",
    src: "/Images/seaory-r330.jpg",

  },
  {
    name: "Seaory E30",
    category: "Printers",
    type: "Single-sided ID card printer",
    src: "/Images/seaory-e30.jpg",
  },
  {
    name: "Seaory S22K",
    category: "Printers",
    type: "Embedded duplex card printer",
    src: "/Images/seaory-s22k.jpg",
  },
  {
    name: "Seaory S20R",
    category: "Printers",
    type: "Desktop erasable card printer",
    src: "/Images/seaory-s20r.jpg",
  },
  {
    name: "Seaory S20",
    category: "Printers",
    type: "Desktop single-sided",
    src: "/Images/printers7.jpg",
  },
  {
    name: "Seaory S21",
    category: "Printers",
    type: "Desktop single-sided (USB and Ethernet)",
    src: "/Images/printers8.jpg",
  },
  {
    name: "Seaory S22",
    category: "Printers",
    type: "Desktop dual-sided",
    src: "/Images/printers9.jpg",
  },
  {
    name: "Seaory S25",
    category: "Printers",
    type: "Single-sided, manual feed",
    src: "/Images/printers10.jpg",
  },
  {
    name: "Seaory S26",
    category: "Printers",
    type: "Single-sided, with card hoppers",
    src: "/Images/printers11.jpg",
  },
  {
    name: "Seaory S28",
    category: "Printers",
    type: "Desktop dual-sided, automatic",
    src: "/Images/printers12.jpg",
  },

  // ---------- Ribbons ----------
  // No photo yet, so each ribbon shows its colour panels instead.
  // panels: the panels in order. Y yellow, M magenta, C cyan, K black, O overlay.
  // half: true draws the Y, M and C panels at half width.
  {
    name: "Full-colour YMCKO ribbon",
    category: "Ribbons",
    type: "Full-colour ribbon",
    description: "For full-colour ID cards.",
    colours: "Yellow, magenta, cyan, black, overlay",
    panels: ["Y", "M", "C", "K", "O"],
  },
  {
    name: "Half-panel YMCKO ribbon",
    category: "Ribbons",
    type: "Half-panel colour ribbon",
    description: "For cards with colour photos and black text.",
    colours: "Yellow, magenta, cyan (half), black, overlay",
    panels: ["Y", "M", "C", "K", "O"],
    half: true,
  },
  {
    name: "Black monochrome ribbon",
    category: "Ribbons",
    type: "Single-colour ribbon",
    description: "For black-only printing.",
    colours: "Black",
    panels: ["K"],
  },
];

const categories = ["All", "Printers", "Ribbons"];

const PANEL_STYLE = {
  Y: "bg-[#FFD400] text-black",
  M: "bg-[#E6007E] text-white",
  C: "bg-[#00A0DC] text-white",
  K: "bg-[#10151C] text-white",
  O: "border border-dashed border-[#4A5560] bg-white text-[#4A5560]",
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]";

const quoteHref = (name) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${name}`)}`;

const countFor = (cat) =>
  cat === "All" ? items.length : items.filter((i) => i.category === cat).length;

function Swatch({ panels, half }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-[#F2F4F5] p-4"
    >
      <div className="flex h-16 w-full max-w-[14rem] overflow-hidden rounded-md">
        {panels.map((k) => (
          <span
            key={k}
            className={`flex items-center justify-center text-xs font-bold ${
              half && "YMC".includes(k) ? "flex-[0.5]" : "flex-1"
            } ${PANEL_STYLE[k]}`}
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <main className="text-[#10151C]">
      {/* pt-20 / md:pt-28 clears the top navbar. Change them to fit its height. */}
      <header className="bg-[#F2F4F5]">
<div className="mx-auto max-w-6xl px-6 pb-8 pt-28 md:pb-16 md:pt-40">          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Our products
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5560]">
            ID card printers and printer ribbons for businesses, schools and
            institutions. Contact us for prices and availability.
          </p>
        </div>
      </header>

      {/* Category buttons */}
      <nav aria-label="Product categories" className="border-b border-[#D9DEE2]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition sm:px-5 sm:py-2 sm:text-base ${
                  active
                    ? "border-[#FFC400] bg-[#FFC400] text-black"
                    : "border-[#10151C] text-[#10151C] hover:border-[#FFC400] hover:bg-[#FFC400]"
                } ${focusRing}`}
              >
                {cat} ({countFor(cat)})
              </button>
            );
          })}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <h2
          className="text-2xl font-bold tracking-tight md:text-3xl"
          aria-live="polite"
        >
          {selectedCategory === "All" ? "All products" : selectedCategory}
        </h2>

        {selectedCategory === "Ribbons" && (
          <p className="mt-3 max-w-xl leading-relaxed text-[#4A5560]">
            Tell us your printer model and we will supply the right ribbon.
          </p>
        )}

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <li
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-[#D9DEE2] bg-white"
            >
              <div className="relative aspect-square bg-white">
                {p.src ? (
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain p-2"
                    priority={i < 4}
                  />
                ) : p.panels ? (
                  <Swatch panels={p.panels} half={p.half} />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#F2F4F5] text-sm text-[#4A5560]">
                    Photo coming soon
                  </div>
                )}
                <span className="absolute left-2 top-2 rounded-full bg-[#10151C] px-2.5 py-0.5 text-xs font-semibold text-white">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col border-t-4 border-[#FFC400] p-3 sm:p-4">
                <h3 className="text-base font-semibold">{p.name}</h3>
                {p.type && (
                  <p className="mt-1 text-xs text-[#4A5560] sm:text-sm">{p.type}</p>
                )}
                {p.description && (
                  <p className="mt-2 text-xs leading-relaxed text-[#2B343D] sm:text-sm">
                    {p.description}
                  </p>
                )}

                {p.features && (
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#2B343D] sm:text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC400]"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(p.size || p.weight || p.colours) && (
                  <dl className="mt-4 divide-y divide-[#D9DEE2] border-t border-[#D9DEE2] text-xs sm:text-sm">
                    {p.size && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#4A5560]">Size</dt>
                        <dd className="text-right font-medium">{p.size}</dd>
                      </div>
                    )}
                    {p.weight && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#4A5560]">Weight</dt>
                        <dd className="font-medium">{p.weight}</dd>
                      </div>
                    )}
                    {p.colours && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#4A5560]">Colours</dt>
                        <dd className="text-right font-medium">{p.colours}</dd>
                      </div>
                    )}
                  </dl>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <a
                    href={quoteHref(p.name)}
                    className={`inline-block rounded-md bg-[#FFC400] px-3 py-1.5 text-xs font-semibold text-black hover:bg-[#E6B000] sm:text-sm ${focusRing}`}
                  >
                    Request a quote
                  </a>
                  {p.category !== "Ribbons" && (
                    <Link
                      href="/Product/Warranty"
                      className={`inline-block rounded-md border border-[#10151C] px-3 py-1.5 text-xs font-semibold text-[#10151C] hover:bg-[#F2F4F5] sm:text-sm ${focusRing}`}
                    >
                      Warranty
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
