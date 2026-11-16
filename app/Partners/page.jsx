export const metadata = {
  title: "Partners | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "The manufacturers and suppliers Mc-Fidel ID & Safety Technocrats Limited works with.",
};

// Add or edit partners here.
const partners = [
  { name: "Evolis", location: "France", since: 2012, link: "https://www.evolis.com"},
  { name: "Seaory Card", location: "", since: 2020,   },
];

export default function PartnersPage() {
  return (
    <main className="bg-white text-[#10151C] md:p-2">
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">Our partners</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A66]">
            We work with trusted manufacturers and suppliers so our clients get dependable products and
            support.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <ul className="grid gap-6 sm:grid-cols-2">
          {partners.map((p) => (
            <li
              key={p.name}
              className="overflow-hidden rounded-2xl border border-[#D9DEE1] bg-white"
            >
              <div className="h-2 bg-[#FFC400]" />
              <div className="p-6">
                <h2 className="text-2xl font-bold tracking-tight">{p.name}</h2>
                {p.location && <p className="mt-1 text-[#4A5A66]">{p.location}</p>}
                <p className="mt-6 text-sm text-[#4A5A66]">Partners since</p>
                <p className="text-lg font-semibold">{p.since}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500 hover:text-blue-700"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}