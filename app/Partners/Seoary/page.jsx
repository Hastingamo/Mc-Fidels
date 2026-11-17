import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Mc-Fidel ID & Safety Technocrats Limited",
  description:
    "Photos from the Seaory team's visit to the Mc-Fidel ID & Safety Technocrats Limited office.",
};

// Edit photos here. Put images in /public/Images.
// `caption` is the short text shown under each photo.
const photos = [
  {
    src: "/Images/gallery-1-group.jpg",
    alt: "Team and visitors standing together in the office",
    caption: "The Seaory team and our staff together at our office.",
  },
  {
    src: "/Images/gallery-2-selfie.jpg",
    alt: "Group selfie during a client visit",
    caption: "A group selfie to mark the visit.",
  },
  {
    src: "/Images/gallery-3-visit.jpg",
    alt: "Team seated in a client's sitting room",
    caption: "Sitting down to talk about our partnership.",
  },
  {
    src: "/Images/gallery-4-office.jpg",
    alt: "Team inspecting equipment in the office",
    caption: "Looking over card printers and equipment in the office.",
  },
  {
    src: "/Images/gallery-5-closeup.jpg",
    alt: "Team member with a visiting partner",
    caption: "One of our team with a visiting Seaory partner.",
  },
  {
    src: "/Images/gallery-6-sofa.jpg",
    alt: "Visitor and host seated on a sofa",
    caption: "An informal chat between host and visitor.",
  },
  {
    src: "/Images/gallery-7-street.jpg",
    alt: "Visitors on site outside a building",
    caption: "Our visitors outside the building.",
  },
  {
    src: "/Images/gallery-8-stairs.jpg",
    alt: "Discussion at the top of a staircase",
    caption: "A quick discussion at the top of the stairs.",
  },
];

export default function GalleryPage() {
  return (
    <main className="text-white">
      <header className="bg-[#161616]">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-16">
          <Link
            href="/Partners"
            className="text-sm font-semibold text-[#FFC400] hover:underline"
          >
            &larr; Back to partners
          </Link>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Seaory visits our office
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            Our partners from Seaory Card came to see us at the Mc-Fidel office.
            They met the team, looked at the products we supply, and talked
            about working together to serve our clients.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <li
              key={p.src}
              className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#161616]"
            >
              <div className="relative aspect-square bg-[#2A2A2A]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                  priority={i < 4}
                />
              </div>
              <p className="border-t-2 border-[#FFC400] p-3 text-xs leading-snug text-[#A3A3A3] sm:text-sm">
                {p.caption}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}