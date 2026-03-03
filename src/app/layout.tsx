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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-zinc-100 antialiased`}>
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10">
          <header className="mb-12 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Jakob Krogh
            </Link>
            <nav className="flex items-center gap-6 text-sm text-zinc-300">
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

          <footer className="mt-16 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
            Built with Next.js • Hosted free on Vercel
          </footer>
        </div>
      </body>
    </html>
  );
}
