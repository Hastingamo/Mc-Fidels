import Link from "next/link";

export const metadata = {
  title: "Warranty and Support | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "One-year warranty and technical support for printers supplied by Mc-Fidel ID & Safety Technocrats Limited.",
};

const PHONE_DISPLAY = "+234 803 621 0152";
const PHONE_LINK = "+2348036210152";
const EMAIL = "mosesfidel@yahoo.com";

const support = [
  "* Printer troubleshooting and technical assistance",

"* Maintenance and servicing",

"* Repairs and replacement of faulty parts",

"* Installation and setup",

"* User guidance and operational support",

];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]";

export default function WarrantyPage() {
  return (
    <main className="text-white">
      <header className="bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <Link
            href="/Product"
            className={`text-sm font-medium text-[#FFC400] underline underline-offset-4 ${focusRing}`}
          >
            Back to products
          </Link>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Warranty and support
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            Your printer is covered by a warranty, and our technicians support it at every branch where it
            is used.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_2fr] md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Warranty</h2>
        <div className="border-l-4 border-[#FFC400] bg-[#161616] p-6">
          <p className="text-3xl font-bold">One year</p>
          <p className="mt-3 text-lg leading-relaxed text-[#E5E5E5]">
            Both devices come with a one-year warranty, covered by the manufacturer&apos;s applicable
            warranty terms and conditions.
          </p>
        </div>
      </section>

      <section className="border-t border-[#2A2A2A]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_2fr] md:py-20">
          <div>
            <h2 className="text-2xl font-bold text-black md:text-3xl">Technical support</h2>
            <p className="mt-3 max-w-xs leading-relaxed text-black">
              We support every branch where our printers are deployed, in Lagos and outside Lagos.
            </p>
          </div>
          <div>
            <p className="text-black">Our support covers:</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {support.map((item) => (
                <li key={item} className="border-l-4 border-[#FFC400] pl-4 leading-snug text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2A2A2A] bg-[#161616]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_2fr] md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Service charges</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-[#E5E5E5]">
            Technical support and on-site service visits attract applicable service charges. We will
            communica te the charges and agree them with you as required.
          </p>
        </div>
      </section>

      <section className="bg-[#FFC400] text-black mt-12 ">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-12">
          <h2 className="max-w-xl text-2xl font-bold md:text-3xl">Need help with your printer?</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_LINK}`}
              className="rounded-md bg-black px-5 py-3 font-semibold text-[#FFC400] hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Printer support request")}`}
              className="rounded-md border border-black px-5 py-3 font-semibold text-black hover:bg-[#E6B000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Send an email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}