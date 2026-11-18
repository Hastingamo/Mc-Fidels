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

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10151C]";

export default function GalleryPage() {
  return (
    <main className="text-[#10151C]">
      {/* pt-20 / md:pt-28 clears the top navbar. Change them to fit its height. */}
      <header className="bg-[#F2F4F5]">
<div className="mx-auto max-w-6xl px-6 pb-8 pt-28 md:pb-16 md:pt-40">          <Link
            href="/Partners"
            className={`text-sm font-semibold text-[#10151C] underline decoration-[#FFC400] decoration-2 underline-offset-4 hover:decoration-[#10151C] ${focusRing}`}
          >
            &larr; Back to partners
          </Link>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Seaory visits our office
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A5560]">
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
              className="group overflow-hidden rounded-xl border border-[#D9DEE2] bg-white"
            >
              <figure>
                {/* Portrait frame so faces and groups are not cropped */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F2F4F5]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    priority={i < 4}
                  />
                </div>
                <figcaption className="border-t-4 border-[#FFC400] p-3 text-xs leading-snug text-[#4A5560] sm:text-sm">
                  {p.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
