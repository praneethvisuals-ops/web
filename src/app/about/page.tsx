import Link from "next/link";

const stats = [
  { value: "8+", label: "Years Crafting Stories" },
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Brands Collaborated" },
  { value: "12", label: "Countries Shot In" },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We align on your story, audience, and visual direction before the first frame is shot.",
  },
  {
    step: "02",
    title: "Direct",
    text: "From styling to lighting, every production choice is curated to match your brand identity.",
  },
  {
    step: "03",
    title: "Deliver",
    text: "You receive refined, platform-ready visuals built for both emotional impact and business goals.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pt-20">
        <div className="lg:col-span-8">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b8c88]">About Praneeth Visuals</p>
          <h1 className="text-4xl font-black leading-[0.9] text-[#320904] sm:text-5xl lg:text-6xl">
            Modern Frames.
            <br />
            Timeless Emotion.
          </h1>
        </div>
        <div className="lg:col-span-4">
          <p className="text-base leading-relaxed text-[#635553]">
            We build cinematic visual narratives for weddings, brands, and personalities who care about detail, feeling, and legacy.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/PHOTO-2026-03-27-22-30-31.jpg"
              alt="Praneeth, Founder of Praneeth Visuals"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2b0905]/85 to-transparent p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#e8c9c1]">Founder</p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Praneeth</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                "Each visual should feel like a memory, not just content. That belief shapes every project we take on."
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-3xl bg-[#f6f3f0] p-7 sm:p-8">
            <h3 className="mb-3 text-3xl font-black text-[#320904]">Our Direction</h3>
            <p className="leading-relaxed text-[#5f5250]">
              Born from a passion for cinematic storytelling, Praneeth Visuals blends artistic composition with strategic thinking. We don&apos;t just document moments; we shape visual identities.
            </p>
          </div>

          <div className="rounded-3xl bg-[#320904] p-7 text-white sm:p-8">
            <h3 className="mb-3 text-3xl font-black">What We Value</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-white/85 sm:text-base">
              <li>Intentional storytelling over template aesthetics</li>
              <li>Premium production quality from shoot to final edit</li>
              <li>Client collaboration rooted in trust and clarity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-[#e6dbd7] bg-white p-5 text-center sm:p-6">
              <p className="text-3xl font-black text-[#320904] sm:text-4xl">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8d7e79]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-black text-[#320904] sm:text-5xl">How We Work</h2>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {process.map((item) => (
            <article key={item.step} className="rounded-3xl bg-[#f6f3f0] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f8f8a]">{item.step}</p>
              <h3 className="mt-3 text-3xl font-black text-[#320904]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#5f5250]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#4d1d15] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border-[24px] border-[#8c4638]/50" />
          <div className="absolute right-10 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border-[10px] border-[#8c4638]/65" />

          <h2 className="relative z-10 text-3xl font-black sm:text-5xl">Let&apos;s Create Your Signature Story</h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-sm text-[#d1b2aa] sm:text-base">
            If you&apos;re building something meaningful, we&apos;ll help you translate it into visuals that people remember.
          </p>

          <div className="relative z-10 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-7 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#320904]">
              Start a Project
            </Link>
            <Link href="/portfolio" className="rounded-full border border-white/35 px-7 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
