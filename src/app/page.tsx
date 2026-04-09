import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate w-full overflow-hidden bg-[#1f0704] text-white">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover opacity-25 filter grayscale"
            src="/IMG_1424.jpg"
            alt="Cinematic backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f0704]/70 via-[#1f0704]/85 to-[#1f0704]" />
          <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[#c88174]/25 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[#6e372d]/30 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[45vh] w-full max-w-6xl flex-col gap-12 px-6 py-14 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80 backdrop-blur-xl">
              Praneeth Visuals Atelier
            </p>
            <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-[5rem]">
              Signature films <br className="hidden sm:block" />
              and portraits for <span className="text-[#c88174]">bold stories.</span>
            </h1>
            <p className="mb-10 text-base leading-relaxed text-white/70 md:text-xl">
              An editorial approach to production, blending art direction, cinematography, and refined post for a
              timeless finish.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:justify-start">
              <Link
                href="/portfolio"
                className="rounded-full bg-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#1f0704] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                Explore Work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/90 backdrop-blur-xl hover:bg-white/20"
              >
                Start a Project
              </Link>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:mx-0 md:max-w-lg">
            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-[36px] border border-white/15 md:block" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/25 bg-white/10 p-3 shadow-[0_40px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <img
                  className="h-full w-full rounded-[26px] object-cover"
                  src="/PHOTO-2026-03-27-22-30-31.jpg"
                  alt="Signature portrait"
                />
              </div>
              <div className="absolute -bottom-10 right-8 w-[70%] rounded-2xl border border-white/20 bg-[#2b0a06]/80 p-4 text-left text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c88174]">Studio Notes</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Intentional lighting, handcrafted color, and a calm on-set experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid items-end gap-6 md:mb-20 md:grid-cols-[2fr_1fr] md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black tracking-tighter text-[#320904] md:text-5xl">
                Elevating brands through cinematic excellence.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-[#534340] md:text-lg">
              We combine technical precision with creative flair to tell stories that resonate and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[220px] md:gap-6">
            {[
              {
                title: "Video Production",
                desc: "High-end commercials, brand films, and cinematic reels that capture your message.",
                span: "md:col-span-7 md:row-span-2",
                featured: true,
                image: "/IMG_1424.jpg",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Photography",
                desc: "From products to lifestyle, we freeze moments with artistic precision.",
                span: "md:col-span-5",
                image: "/IMG_1430.jpg",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Model Shoots",
                desc: "Editorial and portfolio shoots designed to highlight persona and fashion.",
                span: "md:col-span-5",
                image: "/IMG_1425.jpg",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: "Destination Weddings",
                desc: "We travel globally to document your love story with a cinematic touch.",
                span: "md:col-span-6",
                image: "/wedding-1.jpg",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Baby Shoots",
                desc: "Newborn and milestone sessions with soft styling and a calm, gentle approach.",
                span: "md:col-span-3",
                image: "/IMG_3197.png",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M12 21a8 8 0 100-16 8 8 0 000 16z" />
                    <path d="M9 10h.01M15 10h.01" />
                    <path d="M8.5 14c1.2 1 2.4 1 3.6 0" />
                  </svg>
                ),
              },
              {
                title: "Social Media",
                desc: "Short-form, high-impact content optimized for Reels and social growth.",
                span: "md:col-span-3",
                image: "/IMG_5079.jpg",
                icon: (
                  <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((item) => {
              const isFeatured = item.featured;

              return (
                <div
                  key={item.title}
                  className={`group hover-lift card-rounded relative flex min-h-[220px] flex-col justify-between overflow-hidden border border-[#eadfd9] bg-[#f6f3f0] p-7 transition-all duration-500 hover:bg-[#4d1d15] md:p-10 ${item.span}`}
                >
                  {item.image && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={item.image}
                        className="h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-10 group-hover:scale-110"
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-[#4d1d15]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                  <div className="relative z-10 flex items-start justify-between gap-6">
                    <div
                      className={`flex items-center justify-center rounded-2xl bg-[#4d1d15] p-3 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#4d1d15] ${
                        isFeatured ? "h-16 w-16 md:h-20 md:w-20 md:p-5" : "h-12 w-12 md:h-16 md:w-16 md:p-4"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h3
                      className={`mb-3 font-black text-[#320904] group-hover:text-white ${
                        isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-[#534340] group-hover:text-white/85 ${
                        isFeatured ? "text-lg md:text-xl" : "text-base md:text-lg"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
          <h2 className="mb-10 text-center text-4xl font-black tracking-tighter text-[#320904] md:mb-16 md:text-6xl">Selected Works.</h2>

          <div className="grid grid-cols-2 gap-3 auto-rows-[130px] sm:gap-4 sm:auto-rows-[180px] md:grid-cols-4 md:auto-rows-[350px]">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
              <img className="h-full w-full object-cover" src="/IMG_1430.jpg" alt="Fashion Photography" />
            </div>
            <div className="relative col-span-1 overflow-hidden rounded-xl md:col-span-2">
              <img className="h-full w-full object-cover" src="/IMG_1424.jpg" alt="Commercial Production" />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img className="h-full w-full object-cover" src="/IMG_3197.png" alt="Baby Shoot" />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img className="h-full w-full object-cover" src="/IMG_5079.jpg" alt="Social Content" />
            </div>
          </div>

          <div className="mt-12 text-center md:mt-16">
            <Link href="/portfolio" className="border-b-2 border-[#320904]/20 pb-2 text-lg text-[#320904] hover:border-[#320904]">
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#320904] py-20 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tighter md:mb-8 md:text-6xl">
              Why work <br />
              with us?
            </h2>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              We don&apos;t just shoot; we direct. We don&apos;t just record; we curate. Our process aligns with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {[
              ["01.", "Cinematic Quality", "Industry-standard cinema cameras and premium lighting for every frame."],
              ["02.", "Fast Turnaround", "Efficient post-production workflows to deliver quickly."],
              ["03.", "Creative Direction", "Guidance from concept to final cut with clear brand intent."],
              ["04.", "Brand Focused", "Every visual choice is made to strengthen your brand identity."],
            ].map((point) => (
              <div key={point[0]} className="flex items-start gap-4 md:gap-6">
                <span className="text-2xl font-black text-[#c88174] md:text-3xl">{point[0]}</span>
                <div>
                  <h4 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">{point[1]}</h4>
                  <p className="text-white/60">{point[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3f0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-[#eadfd9] bg-white p-8 shadow-[0_30px_70px_rgba(50,9,4,0.08)] sm:p-10 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c88174]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#4d1d15]/10 blur-[110px]" />

            <div className="relative flex flex-col items-center text-center">
              <div>
                <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#320904]/10 bg-[#f6f1ee] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#6e372d]">
                  Praneeth Visuals
                </p>
                <h2 className="mb-5 text-3xl font-black tracking-tight text-[#320904] sm:text-4xl md:text-5xl">
                  Ready to tell your story in motion?
                </h2>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-[#5f5250] md:text-lg">
                  Premium direction, meticulous production, and cinematic post crafted for brands, portraits, and celebrations.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-full bg-[#320904] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_18px_50px_rgba(50,9,4,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_70px_rgba(50,9,4,0.4)]"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-full border border-[#320904]/20 bg-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#320904] shadow-[0_10px_30px_rgba(50,9,4,0.12)]"
                  >
                    View Showreel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
