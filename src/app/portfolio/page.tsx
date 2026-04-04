import Link from "next/link";

const items = [
  {
    name: "Velvet & Concrete",
    image: "/IMG_1430.jpg",
    span: "row-span-5",
  },
  {
    name: "The Garden Vows",
    image: "/IMG_0914.jpg",
    span: "row-span-3",
  },
  {
    name: "Midnight Drift",
    image: "/IMG_1425.jpg",
    span: "row-span-3",
  },
  {
    name: "Evening Banquet",
    image: "/IMG_0580.jpg",
    span: "row-span-2",
  },
  {
    name: "Serene Morning",
    image: "/IMG_1076.jpg",
    span: "row-span-4",
  },
  {
    name: "Behind The Glass",
    image: "/IMG_5079.jpg",
    span: "row-span-2",
  },
  {
    name: "Industrial Soul",
    image: "/IMG_3621.jpg",
    span: "row-span-4",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-3 pb-8 pt-12 text-center sm:px-6 sm:pt-16">
        <h1 className="mb-4 text-5xl font-black leading-[0.92] text-[#320904] sm:text-6xl">
          Visual Narrative
          <br />
          Through a Curator&apos;s Lens
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#7b6661] sm:text-base">
          A collection of moments captured in time, blending cinematic depth with emotional authenticity. Every frame tells a unique story.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-3 pb-6 sm:px-6">
        <div className="grid grid-cols-3 gap-2.5 auto-rows-[72px] sm:gap-3 sm:auto-rows-[86px]">
          {items.map((item) => (
            <article key={item.name} className={`overflow-hidden rounded-2xl ${item.span}`}>
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-3 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-2xl bg-[#4d1d15] px-6 py-10 text-center text-white sm:rounded-3xl sm:px-10 sm:py-14">
          <h2 className="mb-4 text-4xl font-black sm:text-5xl">Ready to create your story?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-sm text-[#cfa49b] sm:text-base">
            Whether it&apos;s a timeless wedding, a bold editorial, or a cinematic brand film, we&apos;re here to bring your vision to life.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#320904] sm:px-6 sm:py-2.5">
              Book a Shoot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
