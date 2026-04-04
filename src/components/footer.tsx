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
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
