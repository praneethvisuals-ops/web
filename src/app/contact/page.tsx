export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <section className="max-w-3xl py-12 md:py-20">
        <h1 className="mb-6 text-5xl font-black leading-tight text-[#320904] md:text-7xl">Let’s Elevate Your Brand Together</h1>
        <p className="text-lg leading-relaxed text-[#775751]">Whether it&apos;s a cinematic brand story or high-end photography, we capture what sets you apart.</p>
      </section>

      <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <form className="soft-shadow rounded-2xl border ghost-border bg-white p-8 lg:col-span-7 md:p-12">
          <div className="grid gap-7 md:grid-cols-2">
            <label className="text-sm text-[#775751]">
              Full Name
              <input className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" placeholder="Your name" />
            </label>
            <label className="text-sm text-[#775751]">
              Phone Number
              <input className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" placeholder="+1 (000) 000-0000" />
            </label>
            <label className="text-sm text-[#775751]">
              Email Address
              <input type="email" className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" placeholder="hello@company.com" />
            </label>
            <label className="text-sm text-[#775751]">
              Project Type
              <select className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]">
                <option>Photography</option>
                <option>Video Production</option>
                <option>Models / Casting</option>
                <option>Destination Wedding</option>
              </select>
            </label>
          </div>

          <label className="mt-7 block text-sm text-[#775751]">
            Budget Range
            <select className="mt-2 w-full border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]">
              <option>₹15,000 - ₹35,000</option>
              <option>₹35,000 - ₹75,000</option>
              <option>₹75,000 - ₹1,50,000</option>
              <option>₹1,50,000+</option>
            </select>
          </label>

          <label className="mt-7 block text-sm text-[#775751]">
            Message
            <textarea rows={4} className="mt-2 w-full resize-none border-b border-[#d8c2be]/50 bg-[#e5e2df]/30 px-1 py-3 outline-none focus:border-[#320904]" placeholder="Tell us about your vision..." />
          </label>

          <button type="submit" className="mt-10 rounded-full bg-[#4d1d15] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#c88174]">
            Request a Quote
          </button>
        </form>

        <aside className="space-y-6 lg:col-span-5">
          <div className="group relative overflow-hidden rounded-2xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7LC5XAUOsCqoShXZLOuE2n6Mp2qJWmRnHVg34mzh9LGun8UzGhC33kVUyll3Shdl1vkq6Tre0rdcbZYi77qUjIS079XEzO0osx6Xs7vjcGNFrU0RIN6xZd8jE0-wWUYcjkYNGuavUoFVXCYo-iT6vuykxskznzAapMGM_lHslhyBXFxgMH1bACfu1iGFemh6DdM0G-ccX4bxg_zLdeMBF9QyZCLriA2O33zJ1rhZ6dJfuymPNVMihSpQs_UJ-qri81xlTsocE0Mg" alt="Studio" className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#320904]/85 to-transparent p-7 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#ffb4a7]">Curated Gallery</p>
                <h3 className="text-3xl font-bold">The Digital Curator</h3>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://wa.me" className="rounded-2xl bg-[#f6f3f0] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#775751]">WhatsApp</p>
              <p className="text-lg font-bold text-[#320904]">Chat Now</p>
            </a>
            <a href="https://instagram.com" className="rounded-2xl bg-[#f6f3f0] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#775751]">Instagram</p>
              <p className="text-lg font-bold text-[#320904]">@praneethvisuals</p>
            </a>
          </div>

          <div className="rounded-r-2xl border-l-4 border-[#320904] bg-white p-7">
            <h4 className="mb-2 text-2xl font-bold text-[#320904]">Studio Presence</h4>
            <p className="leading-7 text-[#775751]">Available for international projects and destination shoots with a premium production pipeline.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
