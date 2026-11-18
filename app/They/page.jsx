import Link from "next/link";

export const metadata = {
  title: "Services | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "ID card printers, identification cards, safety devices, access control and technical support from Mc-Fidel ID & Safety Technocrats Limited.",
};

const PHONE_DISPLAY = "+234 803 621 0152";
const PHONE_LINK = "+2348036210152";
const EMAIL = "mosesfidel@yahoo.com";

const services = [
  "*Accredited distributor of Seaory Printers",
  "*Total Identity Technology",
  "*Embossing *Encoding *Biometrics",
  "*Fulfilment - PVC cards personalization",
  "*Sales/Lease/Hiring of ID card printers (for Events & Exhibitions)",
  "*ID card Printer Support (Seaory Printers)",
  "*ID printer Consumables",
  "*Customised Lanyards",
  "*Provision of PPEs",
  "*Turnstile Access Control & Installation",
  "*Access Control System",
  "*Safety/Security Devices",
  "*Accreditation Services",
  "* Printer troubleshooting and technical assistance",
  "* Maintenance and servicing",
  "* Repairs and replacement of faulty parts",
  "* Installation and setup",
  "* User guidance and operational support"
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]";

function ContactActions({ subject }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={`tel:${PHONE_LINK}`}
        className={`rounded-md bg-[#FFC400] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#E6B000] ${focusRing}`}
      >
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
        className={`rounded-md border border-[#10151C] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#F2F4F5] ${focusRing}`}
      >
        Send an email
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#10151C]">
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">Our services</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A66]">
            We provide support to every branch where our printers are deployed, both within Lagos and outside Lagos.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What we offer</h2>
        <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <li key={item} className="border-l-4 border-[#FFC400] pl-4 leading-snug">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[#D9DEE1]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border border-[#D9DEE1] p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Buy an ID card printer</h2>
            <p className="mt-3 leading-relaxed text-[#4A5A66]">
              Tell us how many cards you print and what you need on them, and we will recommend a printer
              and quote you.
            </p>
            <ContactActions subject="ID card printer enquiry" />
          </div>

          <div className="rounded-2xl border border-[#D9DEE1] p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Get your ID cards made</h2>
            <p className="mt-3 leading-relaxed text-[#4A5A66]">
              Need special ID cards for your staff, students or members? Contact us with your quantity and
              design requirements.
            </p>
            <ContactActions subject="ID card enquiry" />
          </div>
             <div className="rounded-2xl border border-[#D9DEE1] p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Get your ribbons</h2>
            <p className="mt-3 leading-relaxed text-[#4A5A66]">
              get your colour ribbon to make your id card 
            </p>
            <ContactActions subject="ID card enquiry" />
          </div>
        </div>
      </section>

      <section className="bg-[#10151C] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <p className="max-w-xl text-lg">Not sure what you need? We can help you choose.</p>
          <Link
            href="/Contact"
            className={`rounded-md bg-[#FFC400] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#E6B000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            Go to contact page
          </Link>
        </div>
      </section>
    </main>
  );
}