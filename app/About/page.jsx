import Image from "next/image";

export const metadata = {
  title: "About | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "Nigerian supplier of ID card printers, identification systems, safety devices and technology solutions since 2009.",
};

const services = [
  "ID card printers , card printing and line yard ",
  "Identification cards and related accessories",
  "Security and safety devices",
  "Specialised technological equipment",
  "Identification and access-control solutions",
  "Office, industrial and electronic equipment",
  "Technical support and related services",
];

const team = [
  {
    name: "Moses-Ugoh Chiwueze",
    role: "Management Executive",
    bio: "Previously worked with the Central Securities Clearing System (CSCS), the clearing and settlement institution for the Nigerian capital market. Brings insight into corporate operations, administration and institutional service delivery.",
  },
  {
    name: "Wasiu Olayinka Oduyoye",
    role: "Technical Expert",
    bio: "Provides technical knowledge in support of the company's products, equipment and service delivery, and makes sure technical requirements are properly met.",
  },
  {
    name: "Moses Edwards Onyinyechika",
    role: "Software Engineer",
    bio: "Leads software development and technical computing, supporting the company's technology-related operations and solutions.",
  },
];

const clients = [
  "Access Bank Plc",
  "Shell Petroleum Development Company (SPDC)",
  "Honeywell Oil & Gas",
  "Niger Delta Petroleum Development Company (NDPDC)",
  "First Exploration & Petroleum Development Company",
  "Ahmadu Bello University, Zaria",
  "Tai Solarin Federal University of Education",
];

const values = [
  { title: "Integrity", text: "We do business with honesty, transparency and accountability." },
  { title: "Quality", text: "We supply dependable products that meet required standards." },
  { title: "Professionalism", text: "We hold every business relationship to a high standard." },
  { title: "Innovation", text: "We adopt relevant technological developments and solutions." },
  { title: "Customer satisfaction", text: "We build lasting relationships through responsive service." },
  { title: "Reliability", text: "We deliver on our commitments to clients and partners." },
];

const reasons = [
  "More than 15 years in business",
  "Experienced management and technical staff",
  "Experience with the requirements of major organisations",
  "Focused on ID technology, card printing and safety equipment",
  "Committed to quality products and professional service",
  "Able to serve public and private sector clients",
];

function IdCard() {
  return (
    <div
      className="md:p-2 mx-auto w-full max-w-sm rotate-2 overflow-hidden rounded-2xl border border-[#D9DEE1] bg-white shadow-xl"
      aria-hidden="true"
    >
  <div className="flex items-center justify-between gap-3 bg-[#FFC400] px-5 py-3">
        <span className="text-sm font-bold leading-tight text-black">
          Mc-Fidel ID & Safety Technocrats Limited
        </span>
        <span aria-hidden="true" className="h-3 w-10 shrink-0 rounded-full bg-black/80" />
      </div>

      <div className="flex gap-4 p-5">
        {/* The photo fills this frame; object-top keeps the face in view */}
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-md bg-[#2A2A2A]">
          <Image
            src="/Images/personal.jpg"
            alt="Moses Hasting"
            fill
            sizes="96px"
            priority
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1">
          <p className="text-lg font-bold leading-tight text-white">Moses Hasting</p>
          <p className="text-sm text-[#A3A3A3]">Software Developer</p>
          <p className="text-sm text-[#A3A3A3]">Mc-Fidel</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#2A2A2A] bg-[#0A0A0A] px-5 py-3 text-xs text-[#A3A3A3]">
        <span>RC 837049</span>
        <span>Incorporated 2009</span>
      </div>
    </div>  );
}

function Section({ title, intro, children }) {
  return (
    <section className="border-t border-[#D9DEE1] py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#10151C] md:text-3xl">{title}</h2>
          {intro && <p className="mt-3 max-w-xs leading-relaxed text-[#4A5A66]">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white text-[#10151C]">
      {/* Hero */}
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Identification, safety and technology solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A66]">
              Mc-Fidel ID & Safety Technocrats Limited is a Nigerian-owned company that supplies ID card
              printers, identification systems, safety devices and specialised equipment to organisations
              in oil and gas, financial services, education and other sectors.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="text-[#4A5A66]">Registration number</dt>
                <dd className="font-semibold">RC 837049</dd>
              </div>
              <div>
                <dt className="text-[#4A5A66]">Incorporated</dt>
                <dd className="font-semibold">7 August 2009</dd>
              </div>
            </dl>
          </div>
          <IdCard />
        </div>
      </header>

      <Section
        title="Who we are"
        intro="Quality, professionalism, technical competence and reliable delivery."
      >
        <div className="space-y-5 text-lg leading-relaxed text-[#2B3640]">
          <p>
            We were incorporated on 7 August 2009 under the laws of the Federal Republic of Nigeria. We
            provide dependable products and practical solutions for the operational, security,
            identification and technology needs of organisations across different sectors.
          </p>
          <p>
            Over the years we have built strong business relationships and supplied reputable
            organisations in the oil and gas, financial services and education sectors.
          </p>
        </div>
      </Section>

      <Section title="What we do">
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {services.map((item) => (
            <li key={item} className="flex gap-3 border-l-4 border-[#FFC400] pl-4 leading-snug">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Our team"
        intro="Management and technical professionals who keep delivery effective."
      >
        <div className="divide-y divide-[#D9DEE1]">
          {team.map((person) => (
            <article key={person.name} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-sm font-medium text-[#4A5A66]">{person.role}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#2B3640]">{person.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Who we have served"
        intro="Public and private sector organisations across several industries."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {clients.map((client) => (
            <li
              key={client}
              className="rounded-lg border border-[#D9DEE1] bg-white px-4 py-3 font-medium"
            >
              {client}
            </li>
          ))}
          <li className="rounded-lg border border-dashed border-[#B8C2C9] px-4 py-3 text-[#4A5A66]">
            And other public and private sector organisations
          </li>
        </ul>
      </Section>

      <Section title="Vision and mission">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="mt-2 leading-relaxed text-[#2B3640]">
              To be a leading and trusted provider of identification systems, safety equipment and
              technology-driven solutions in Nigeria and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 leading-relaxed text-[#2B3640]">
              To provide quality products and reliable technology solutions that meet our clients'
              operational needs, with professionalism, integrity, efficiency and good customer service.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our values">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title}>
              <dt className="font-semibold">{v.title}</dt>
              <dd className="mt-1 leading-relaxed text-[#4A5A66]">{v.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Why work with us">
        <ul className="grid gap-3 sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r} className="rounded-lg bg-[#F2F4F5] px-4 py-3 leading-snug">
              {r}
            </li>
          ))}
        </ul>
      </Section>

      {/* Closing */}
      <footer className="bg-[#10151C] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">
            Every organisation needs dependable products, efficient service and trusted partners.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#B8C2C9]">
            We want to serve more organisations, form strategic partnerships and contribute to the growth
            of businesses and institutions in Nigeria.
          </p>
          <dl className="mt-10 grid gap-6 border-t border-white/15 pt-8 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-[#B8C2C9]">Company name</dt>
              <dd className="mt-1 font-medium">Mc-Fidel ID & Safety Technocrats Limited</dd>
            </div>
            <div>
              <dt className="text-[#B8C2C9]">Registration</dt>
              <dd className="mt-1 font-medium">RC 837049, incorporated 7 August 2009</dd>
            </div>
            <div>
              <dt className="text-[#B8C2C9]">Business focus</dt>
              <dd className="mt-1 font-medium">
                ID card printing systems, identification solutions, safety devices and general
                technological supplies
              </dd>
            </div>
          </dl>
        </div>
      </footer>
    </main>
  );
}
