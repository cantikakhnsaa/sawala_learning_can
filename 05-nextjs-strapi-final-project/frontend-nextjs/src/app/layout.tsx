import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArticleHub",
  description: "Aplikasi artikel sederhana dengan Next.js dan Strapi."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">ArticleHub</Link>
          <nav><Link href="/">Beranda</Link><a href="#tentang">Tentang</a></nav>
        </header>
        {children}
        <footer id="tentang" className="site-footer">ArticleHub · Next.js + Strapi CMS</footer>
      </body>
    </html>
  );
}
