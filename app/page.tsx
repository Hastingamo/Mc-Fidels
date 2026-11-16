import Image from "next/image";
import Link from "next/link";

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
  { name: "ID card printer 1", src: "/Images/printer 1.jpg" },
  { name: "ID card printer 2", src: "/Images/printer 5.jpg" },
  { name: "ID card printer 3", src: "/Images/printer 9.jpg" },
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
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC400]";

export default function HomePage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="bg-[#161616]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              ID cards, printers and safety equipment for Nigerian organisations
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
              We have supplied banks, oil and gas companies and universities since 2009. Tell us what you
              need and we will help you choose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/Product"
                className={`rounded-md bg-[#FFC400] px-6 py-3 font-semibold text-black hover:bg-[#E6B000] ${focusRing}`}
              >
                View products
              </Link>
              <Link
                href="/Contact"
                className={`rounded-md border border-[#FFC400] px-6 py-3 font-semibold text-[#FFC400] hover:bg-[#0A0A0A] ${focusRing}`}
              >
                Contact us
              </Link>
            </div>
          </div>
          <Image
            src="/Images/mcfidel-logo.png"
            alt="Mcfidel ID/Safety Technocrats Ltd logo"
            width={730}
            height={320}
            priority
            className="mx-auto h-auto w-full max-w-md rounded-2xl border border-[#2A2A2A] shadow-2xl shadow-black"
          />
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What we supply</h2>
          <Link
            href="/Services"
            className={`font-medium text-[#FFC400] underline underline-offset-4 ${focusRing}`}
          >
            See all services
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="border-l-4 border-[#FFC400] bg-[#161616] p-5">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[#A3A3A3]">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured products */}
      <section className="border-t border-[#2A2A2A]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Printers we supply</h2>
            <Link
              href="/Product"
              className={`font-medium text-[#FFC400] underline underline-offset-4 ${focusRing}`}
            >
              See all products
            </Link>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {featured.map((p) => (
              <li key={p.src} className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#161616]">
                <div className="relative aspect-[4/3] bg-[#2A2A2A]">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="border-t-4 border-[#FFC400] p-4 font-semibold">{p.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients */}
      <section className="border-t border-[#2A2A2A] bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Trusted by</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-3 text-[#E5E5E5] sm:grid-cols-2">
            {clients.map((c) => (
              <li key={c} className="border-b border-[#2A2A2A] pb-3">
                {c}
              </li>
            ))}
          </ul>
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
            className="rounded-md bg-black px-6 py-3 font-semibold text-[#FFC400] hover:bg-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
