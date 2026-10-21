import type { StrapiArticle } from "@/types/article";
import { Container } from "@/components/atoms/Container";
import { ArticleGrid } from "@/components/organisms/ArticleGrid";
import { getArticles } from "@/lib/strapi";

export const metadata = {
  title: "Beranda | ArticleHub"
};

// Server Component: fetch berjalan di server, bukan di browser.
export default async function HomePage() {
  let articles: StrapiArticle[] = [];
  let errorMessage = "";

  try {
    articles = await getArticles();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : "Gagal mengambil data dari Strapi.";
  }

  return (
    <main>
      <section className="hero">
        <Container>
          <p className="eyebrow">PUSAT INFORMASI ARTIKEL</p>
          <h1>Ide, cerita, dan wawasan dalam satu tempat.</h1>
          <p>Artikel dikelola melalui Strapi CMS dan ditampilkan dengan Next.js.</p>
        </Container>
      </section>
      <Container>
        <section className="content-section">
          <div className="section-heading">
            <div><p className="eyebrow">BACAAN TERBARU</p><h2>Artikel pilihan</h2></div>
            <span className="muted">{articles.length} artikel</span>
          </div>
          {errorMessage ? (
            <div className="error-panel">
              <strong>Belum dapat terhubung ke Strapi.</strong>
              <p>{errorMessage}</p>
              <p>Pastikan Strapi berjalan, STRAPI_URL benar, content type Article tersedia, dan izin find diatur dengan benar.</p>
            </div>
          ) : <ArticleGrid articles={articles} />}
        </section>
      </Container>
    </main>
  );
}
