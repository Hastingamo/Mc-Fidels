import ContactForm from "../Component/ContactForrm";

export const metadata = {
  title: "Contact | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "Get in touch with Mc-Fidel ID & Safety Technocrats Limited for ID card printers, identification systems and safety equipment.",
};

// const PHONE_DISPLAY = "+234 803 621 0152";
// const PHONE_LINK = "+2348036210152";
// const EMAIL = "mosesfidel@yahoo.com";

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
        {/* <div>
          <h2 className="text-2xl font-bold tracking-tight">Contact person</h2>
          <p className="mt-4 text-xl font-semibold">Moses-Ugoh Chiwueze</p>
          <p className="text-sm font-medium text-[#4A5A66]">Management Executive</p>

          <dl className="mt-8 space-y-6">
            <div className="border-l-4 border-[#FFC400] pl-4">
              <dt className="text-sm text-[#4A5A66]">Phone</dt>
              <dd>
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="text-lg font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]"
                >
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="border-l-4 border-[#FFC400] pl-4">
              <dt className="text-sm text-[#4A5A66]">Email</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-lg font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </div> */}
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