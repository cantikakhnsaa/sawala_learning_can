import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Artikel tidak ditemukan</h1>
      <p>Artikel mungkin belum diterbitkan atau slug tidak sesuai.</p>
      <Link className="read-more" href="/">Kembali ke beranda</Link>
    </main>
  );
}
