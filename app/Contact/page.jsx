import ContactForm from "../Component/ContactForrm";

export const metadata = {
  title: "Contact | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "Get in touch with Mc-Fidel ID & Safety Technocrats Limited for ID card printers, identification systems and safety equipment.",
};



export default function ContactPage() {
  return (
    <main className="bg-white text-[#10151C] md:p-2">
      <header className="bg-[#F2F4F5]">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">Contact us</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5A66]">
            Call or email us for quotes, product enquiries and technical support on ID card printers,
            identification systems and safety equipment.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
     
      <ContactForm />

        <div className="self-start rounded-2xl border border-[#D9DEE1] bg-[#F2F4F5] p-6">
          <h2 className="text-lg font-semibold">Company registration</h2>
          <dl className="mt-4 divide-y divide-[#D9DEE1] text-sm">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-[#4A5A66]">Company</dt>
              <dd className="text-right font-medium">Mc-Fidel ID & Safety Technocrats Limited</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-[#4A5A66]">RC number</dt>
              <dd className="font-medium">837049</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-[#4A5A66]">VAT</dt>
              <dd className="font-medium">LA/AM/VT-06002837049</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-[#4A5A66]">TIN</dt>
              <dd className="font-medium">15212278-001</dd>
            </div>
          </dl>
        </div>
      </section>
      {/* <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      </section> */}
    </main>
  );
}