import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#ece8e6] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-6 text-[11px] text-[#958c89] sm:flex-row sm:px-6 sm:py-7 sm:text-xs">
        <div className="flex items-center gap-2 text-[#58504d]">
          <img src="/gallery-2.jpg" alt="Praneeth Visuals Logo" className="h-6 w-6 rounded object-cover" />
          <span className="font-semibold">Praneeth Visuals</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="https://www.instagram.com/praneethvisuals/" target="_blank" rel="noreferrer" className="hover:text-[#320904] transition-colors">Instagram</a>
          <a href="https://wa.me/919843412140?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20video%20production%20services." target="_blank" rel="noreferrer" className="hover:text-[#320904] transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
