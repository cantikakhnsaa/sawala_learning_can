import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { getArticles } from "@/lib/strapi";

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let articles;
  try {
    articles = await getArticles();
  } catch {
    notFound();
  }

  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="content-section">
      <Container>
        <Link className="back-link" href="/">← Kembali ke artikel</Link>
        <article className="article-detail">
          <p className="eyebrow">ARTICLEHUB · ARTIKEL</p>
          <h1>{article.title}</h1>
          <p className="article-meta">{article.author || "Redaksi"}{article.publishedAt ? ` · ${new Date(article.publishedAt).toLocaleDateString("id-ID")}` : ""}</p>
          {article.excerpt && <p className="lead">{article.excerpt}</p>}
          <p>Konten artikel dikelola di Strapi. Untuk latihan ini, tampilkan excerpt dan metadata terlebih dahulu; kamu bisa mengembangkan renderer Blocks Strapi untuk menampilkan isi rich text.</p>
        </article>
      </Container>
    </main>
  );
}
