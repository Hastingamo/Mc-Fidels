"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { href: "/About", label: "About" },
  { href: "/Product", label: "Product" },
  { href: "/Partners", label: "Partners" },
  { href: "/Contact", label: "Contact" },
  { href: "/They", label: "services"},
  { href: "/New", label: "New"},
];

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (href) => pathname.toLowerCase().startsWith(href.toLowerCase());

  const linkClass = (href) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400] ${
      isActive(href)
        ? "bg-[#FFC400] text-black"
        : "text-[#E5E5E5] hover:bg-[#1F1F1F]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]"
        >
  
                <Image
            src="/Images/mcfidel-logo.png"
            alt="Mcfidel ID/Safety Technocrats Ltd logo"
            width={30}
            height={20}
            priority
            className="mx-auto h-auto w-full max-w-md rounded-2xl border border-[#2A2A2A] shadow-2xl shadow-black"
          />
          <span className="text-lg font-bold tracking-tight text-white">Mc-Fidel</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-white hover:bg-[#1F1F1F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400] md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-menu" className="border-t border-[#2A2A2A] bg-[#0A0A0A] px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href} className="py-1">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`block ${linkClass(l.href)} text-base`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
