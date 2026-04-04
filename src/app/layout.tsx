import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Praneeth Visuals",
  description: "Cinematic production, photography, model shoots, baby shoots, and destination weddings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${manrope.variable}`}>
      <body className="bg-white text-[#1c1c1a] antialiased overflow-x-hidden w-full m-0 p-0">
        <LoadingScreen />
        <Navbar />
        <main className="pt-24 min-h-screen overflow-hidden w-full">{children}</main>
        <Footer />
        <a
          href="https://wa.me"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-4 right-4 z-[120] flex h-10 w-10 items-center justify-center transition-transform hover:-translate-y-1 md:bottom-6 md:right-6 md:h-12 md:w-12"
        >
          <img src="/whatsapp.png" alt="WhatsApp Icon" className="h-full w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]" />
        </a>
      </body>
    </html>
  );
}
