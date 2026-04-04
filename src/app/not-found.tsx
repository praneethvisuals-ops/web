import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-8xl font-black text-[#320904]">404</h1>
      <h2 className="mb-6 text-2xl font-bold text-[#534340]">Page not found</h2>
      <p className="mb-8 max-w-sm text-base text-[#7b6661]">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#320904] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_18px_50px_rgba(50,9,4,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_70px_rgba(50,9,4,0.4)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
