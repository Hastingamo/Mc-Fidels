import Link from "next/link";

export const metadata = {
  title: "Services | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "ID card printers, PVC card personalization, ribbons, access control, safety devices and printer support from Mc-Fidel ID & Safety Technocrats Limited.",
};

const PHONE_DISPLAY = "+234 803 621 0152";
const PHONE_LINK = "+2348036210152";
const EMAIL = "mosesfidel@yahoo.com";

const serviceGroups = [
  {
    title: "ID card printers",
    note: "Accredited distributor of Seaory Printers",
    items: [
      "Sales of ID card printers",
      "Lease or hire for events and exhibitions",
      "ID printer consumables",
    ],
  },
  {
    title: "ID cards and identity technology",
    note: "Total identity technology",
    items: [
      "PVC card personalization",
      "Embossing",
      "Encoding",
      "Biometrics",
      "Customised lanyards",
      "Accreditation services",
    ],
  },
  {
    title: "Access control and safety",
    items: [
      "Turnstile access control and installation",
      "Access control systems",
      "Safety and security devices",
      "Provision of PPEs",
    ],
  },
];

const supportItems = [
  "Printer troubleshooting and technical assistance",
  "Maintenance and servicing",
  "Repairs and replacement of faulty parts",
  "Installation and setup",
  "User guidance and operational support",
];

const enquiries = [
  {
    title: "Buy an ID card printer",
    text: "Tell us how many cards you print and what goes on them. We will recommend a printer and send a quote.",
    subject: "ID card printer enquiry",
  },
  {
    title: "Get your ID cards made",
    text: "Need cards for staff, students or members? Send us the quantity and your design requirements.",
    subject: "ID card printing enquiry",
  },
  {
    title: "Order printer ribbons",
    text: "Colour and monochrome ribbons for your ID card printer. Tell us your printer model and how many you need.",
    subject: "Printer ribbon enquiry",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]";

const primaryButton = `inline-flex items-center justify-center rounded-md bg-[#FFC400] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#E6B000] ${focusRing}`;
const secondaryButton = `inline-flex items-center justify-center rounded-md border border-[#10151C] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#F2F4F5] ${focusRing}`;

function ContactActions({ subject }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a href={`tel:${PHONE_LINK}`} className={primaryButton}>
        Call {PHONE_DISPLAY}
      </a>
      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
        className={secondaryButton}
      >
        Send an email
      </a>
    </div>
  );
}

function ItemList({ items }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="border-l-4 border-[#FFC400] pl-4 leading-snug">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#10151C]">
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            ID cards, access control and safety, supplied and supported
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A66]">
            We support every branch where our printers are deployed, in Lagos and outside it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_LINK}`} className={primaryButton}>
              Call {PHONE_DISPLAY}
            </a>
            <Link href="/Contact" className={secondaryButton}>
              Contact us
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What we offer</h2>
        <div className="mt-10 divide-y divide-[#D9DEE1] border-t border-[#D9DEE1]">
          {serviceGroups.map((group) => (
            <div key={group.title} className="grid gap-6 py-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
                {group.note && (
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5A66]">{group.note}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <ItemList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#D9DEE1] bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Request a quote</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry.title}
                className="flex flex-col rounded-2xl border border-[#D9DEE1] bg-white p-6 md:p-8"
              >
                <h3 className="text-xl font-bold tracking-tight">{enquiry.title}</h3>
                <p className="mt-3 leading-relaxed text-[#4A5A66]">{enquiry.text}</p>
                <div className="mt-auto">
                  <ContactActions subject={enquiry.subject} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Technical support</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A5A66]">
              For Seaory printers and other equipment we supply.
            </p>
          </div>
          <div className="md:col-span-2">
            <ItemList items={supportItems} />
          </div>
        </div>
      </section>

      <section className="bg-[#10151C] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <p className="max-w-xl text-lg">Not sure what you need? We will help you choose.</p>
          <Link
            href="/Contact"
            className="rounded-md bg-[#FFC400] px-5 py-3 font-semibold text-[#10151C] hover:bg-[#E6B000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}