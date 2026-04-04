import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-3 pb-10 pt-16 sm:px-6 sm:pt-20 lg:pt-24">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f8f8b]">Our Expertise</p>

        <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <h1 className="text-5xl font-black leading-[0.9] text-[#320904] sm:text-6xl lg:text-7xl">
            Expert Services for
            <br />
            Modern Brands.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-[#746662] sm:text-base">
            We don&apos;t just capture images; we curate visual identities that resonate across the digital landscape through cinematic precision.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-3 pb-10 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <article className="group relative overflow-hidden rounded-3xl lg:col-span-2">
            <img
              src="/wedding-1.jpg"
              alt="Video Production"
              className="h-[230px] w-full object-cover sm:h-[320px] lg:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d0804]/90 via-[#2d0804]/45 to-transparent p-5 sm:p-7">
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <h3 className="mb-2 text-3xl font-bold text-white">Video Production</h3>
                <p className="mb-4 max-w-xl text-sm leading-relaxed text-white/80">
                  Elevate your digital presence with high-impact Ads, social media Reels, Corporate films, and comprehensive Event coverage.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85">Reels</span>
                  <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85">Corporate</span>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#4d1d15] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Learn More <span>➜</span>
                </Link>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl">
            <img
              src="/wedding-2.jpg"
              alt="Photography"
              className="h-[230px] w-full object-cover sm:h-[320px] lg:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d0804]/90 via-[#2d0804]/45 to-transparent p-5 sm:p-7">
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <h3 className="mb-2 text-3xl font-bold text-white">Photography</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/80">Specialized Product shoots, Lifestyle visuals, and comprehensive Brand photography.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#4d1d15] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:mt-5 lg:grid-cols-3 lg:gap-5">
          <article className="group relative overflow-hidden rounded-3xl">
            <img
              src="/IMG_1425.jpg"
              alt="Model Shoots"
              className="h-[210px] w-full object-cover sm:h-[240px] lg:h-[250px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d0804]/90 via-[#2d0804]/40 to-transparent p-5">
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="mb-2 text-3xl font-bold text-white">Model Shoots</h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">Portfolio shoots and high-fashion editorials including casting and creative direction.</p>
                <Link href="/contact" className="inline-flex rounded-full bg-[#4d1d15] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl">
            <img
              src="/IMG_0580.jpg"
              alt="Destination Weddings"
              className="h-[210px] w-full object-cover sm:h-[240px] lg:h-[250px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d0804]/90 via-[#2d0804]/40 to-transparent p-5">
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="mb-2 text-3xl font-bold text-white">Destination Weddings</h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">Premium cinematic wedding films for exclusive destination ceremonies worldwide.</p>
                <Link href="/contact" className="inline-flex rounded-full bg-[#4d1d15] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl">
            <img
              src="/PHOTO-2026-03-20-19-23-02.jpg"
              alt="Baby Shoots"
              className="h-[210px] w-full object-cover sm:h-[240px] lg:h-[250px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d0804]/90 via-[#2d0804]/40 to-transparent p-5">
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="mb-2 text-3xl font-bold text-white">Baby Shoots</h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80">
                  Newborn and milestone sessions with soft lighting, cozy styling, and gentle direction.
                </p>
                <Link href="/contact" className="inline-flex rounded-full bg-[#4d1d15] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mb-12 mt-8 max-w-6xl px-3 sm:mb-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#5a1e15] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="absolute -right-8 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border-[22px] border-[#8c4638]/50" />
          <div className="absolute right-8 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border-[10px] border-[#8c4638]/65" />

          <h2 className="relative z-10 mb-4 text-5xl font-black sm:text-6xl">Ready to elevate your brand?</h2>
          <p className="relative z-10 mx-auto mb-7 max-w-2xl text-sm text-[#d0b2ab] sm:text-base">
            Let&apos;s collaborate to create visual stories that capture the essence of your vision with uncompromising quality.
          </p>

          <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#320904]">
              Request a Quote
            </Link>
            <Link href="/portfolio" className="rounded-full border border-white/35 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white">
              View Showreel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
