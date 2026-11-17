"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EMAIL = "mosesfidel@yahoo.com";

// One list now. Each item gets a `category`.
const items = [
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
    name: "SEAORY R330",
    category: "Printers",
    type: "Desktop dual-sided ID card printer",
    src: "/Images/seaory-r330.jpg", // keep your features, size, weight
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

  // Ribbons: src, type, compatible (array) and prints are optional
  { name: "Ribbon 1", category: "Ribbons" },
  { name: "Ribbon 2", category: "Ribbons" },
];

const categories = ["All", "Printers", "Ribbons"];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]";

const quoteHref = (name) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${name}`)}`;

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const countFor = (cat) =>
    cat === "All"
      ? items.length
      : items.filter((i) => i.category === cat).length;

  return (
    <main className="text-[#10151C]">
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Our products
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            ID card printers, card dispensers and printer ribbons for
            businesses, schools and institutions. Contact us for prices and
            availability.
          </p>
        </div>
      </header>

      {/* Category buttons */}
      <nav
        aria-label="Product categories"
        className="border-b border-[#2A2A2A]"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 py-5">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full border border-[#FFC400] px-5 py-2 font-semibold transition ${
                  active
                    ? "bg-[#FFC400] text-black"
                    : "text-[#FFC400] hover:bg-[#FFC400] hover:text-black"
                } ${focusRing}`}
              >
                {cat} ({countFor(cat)})
              </button>
            );
          })}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
          {selectedCategory === "All" ? "All products" : selectedCategory}
        </h2>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((p, i) => (
            <li
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#161616]"
            >
              <div className="relative aspect-square bg-[#2A2A2A]">
                {p.src ? (
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[#A3A3A3]">
                    Photo coming soon
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col border-t-4 border-[#FFC400] p-3">
                <h3 className="text-sm font-semibold sm:text-base">{p.name}</h3>
                {p.type && (
                  <p className="mt-1 text-xs text-[#A3A3A3]">{p.type}</p>
                )}

                {p.features && (
                  <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#E5E5E5] sm:text-sm">
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

                {(p.size || p.weight || p.compatible || p.prints) && (
                  <dl className="mt-4 divide-y divide-[#2A2A2A] border-t border-[#2A2A2A] text-xs sm:text-sm">
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
                    {p.compatible && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#A3A3A3]">Fits</dt>
                        <dd className="text-right font-medium">
                          {p.compatible.join(", ")}
                        </dd>
                      </div>
                    )}
                    {p.prints && (
                      <div className="flex justify-between gap-4 py-2">
                        <dt className="text-[#A3A3A3]">Yield</dt>
                        <dd className="font-medium">{p.prints}</dd>
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
                      className={`inline-block rounded-md border border-[#FFC400] px-3 py-1.5 text-xs font-semibold text-[#FFC400] hover:bg-[#0A0A0A] sm:text-sm ${focusRing}`}
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