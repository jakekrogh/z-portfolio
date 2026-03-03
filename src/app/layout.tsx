import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakob Krogh | Portfolio",
  description: "Portfolio site with selected projects and background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} text-zinc-100 antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-[-5rem] top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10">
          <header className="glass-nav sticky top-5 z-20 mb-12 flex items-center justify-between rounded-2xl px-5 py-3">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Jakob Krogh
            </Link>
            <nav className="flex items-center gap-5 text-sm text-zinc-200">
              <Link href="/projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 border-t border-white/15 pt-6 text-sm text-zinc-300">
            Built with Next.js • Hosted free on Vercel
          </footer>
        </div>
      </body>
    </html>
  );
}
