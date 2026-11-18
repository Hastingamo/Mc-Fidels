import Image from "next/image";
import Link from "next/link";
import { MotionRoot, Rise, HeroCard, Group, Item } from "./Component/animation";

export const metadata = {
  title: "Mc-Fidel ID & Safety Technocrats Limited | ID cards, printers and safety equipment",
  description:
    "Nigerian supplier of ID card printers, identification cards, safety devices and access-control solutions since 2009.",
};

const services = [
  { title: "ID card printers", text: "Card printing systems for organisations of any size." },
  { title: "Identification cards", text: "Cards and accessories for staff, students and members." },
  { title: "Safety devices", text: "Security and safety equipment for workplaces." },
  { title: "Access control", text: "Identification and access-control solutions." },
  { title: "Technical support", text: "Help with setup, use and upkeep of your equipment." },
  { title: "Other equipment", text: "Specialised, office, industrial and electronic equipment." },
];

const featured = [
  { name: "Desktop Rewrite Card Printer", type: "Rewritable card printer", src: "/Images/printer 1.jpg" },
  { name: "SEAORY R330", type: "Desktop dual-sided ID card printer", src: "/Images/printer 5.jpg" },
  { name: "SEAORY E80E", type: "Portable card dispenser", src: "/Images/printer 9.jpg" },
];

const clients = [
  "Access Bank Plc",
  "Shell Petroleum Development Company",
  "Honeywell Oil & Gas",
  "Niger Delta Petroleum Development Company",
  "First Exploration & Petroleum Development Company",
  "Ahmadu Bello University, Zaria",
  "Tai Solarin Federal University of Education",
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]";

const textLink =
  "font-medium text-[#10151C] underline decoration-[#FFC400] decoration-2 underline-offset-4 hover:decoration-[#10151C]";

function IdCard() {
  return (
    <div
      className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#D9DEE2] bg-white shadow-xl shadow-black/10"
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
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-md bg-[#D9DEE2]">
          <Image
            src="/Images/personalss.jpg"
            alt="Moses Hasting"
            fill
            sizes="96px"
            priority
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1">
          <p className="text-lg font-bold leading-tight text-[#10151C]">Moses Hasting</p>
          <p className="text-sm text-[#4A5560]">Software Developer</p>
          <p className="text-sm text-[#4A5560]">Mc-Fidel</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#D9DEE2] bg-[#F2F4F5] px-5 py-3 text-xs text-[#4A5560]">
        <span>RC 837049</span>
        <span>Incorporated 2009</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <MotionRoot>
      <main className="bg-white text-[#10151C]">
        {/* Hero */}
        <section className="bg-[#F2F4F5]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
            <div>
              <Rise>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  ID cards, printers and safety equipment for Nigerian organisations
                </h1>
              </Rise>
              <Rise delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5560]">
                  We have supplied banks, oil and gas companies and universities since 2009. Tell us
                  what you need and we will help you choose.
                </p>
              </Rise>
              <Rise delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/Product"
                    className={`rounded-md bg-[#FFC400] px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#E6B000] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                  >
                    View products
                  </Link>
                  <Link
                    href="/Contact"
                    className={`rounded-md border border-[#10151C] px-6 py-3 font-semibold text-[#10151C] transition hover:-translate-y-0.5 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                  >
                    Contact us
                  </Link>
                </div>
              </Rise>
            </div>
            <HeroCard>
              <IdCard />
            </HeroCard>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What we supply</h2>
            <Link href="/Services" className={`${textLink} ${focusRing}`}>
              See all services
            </Link>
          </div>
          <Group className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Item key={s.title} className="border-l-4 border-[#FFC400] bg-[#F2F4F5] p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-[#4A5560]">{s.text}</p>
              </Item>
            ))}
          </Group>
        </section>

        {/* Featured products */}
        <section className="border-t border-[#D9DEE2]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Printers and dispensers we supply
              </h2>
              <Link href="/Product" className={`${textLink} ${focusRing}`}>
                See all products
              </Link>
            </div>
            <Group className="mt-8 grid gap-6 sm:grid-cols-3">
              {featured.map((p) => (
                <Item
                  key={p.src}
                  className="group overflow-hidden rounded-2xl border border-[#D9DEE2] bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F4F5]">
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="border-t-4 border-[#FFC400] p-4">
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-[#4A5560]">{p.type}</p>
                  </div>
                </Item>
              ))}
            </Group>
          </div>
        </section>

        {/* Clients */}
        <section className="border-t border-[#D9DEE2] bg-[#F2F4F5]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Trusted by</h2>
            <Group className="mt-8 grid gap-x-8 gap-y-3 text-[#2B343D] sm:grid-cols-2">
              {clients.map((c) => (
                <Item key={c} className="border-b border-[#D9DEE2] pb-3">
                  {c}
                </Item>
              ))}
            </Group>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="bg-[#FFC400] text-black">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-12">
            <h2 className="max-w-xl text-2xl font-bold md:text-3xl">
              Need ID cards or a card printer? Get a quote today.
            </h2>
            <Link
              href="/Contact"
              className="rounded-md bg-black px-6 py-3 font-semibold text-[#FFC400] transition hover:-translate-y-0.5 hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </MotionRoot>
  );
}