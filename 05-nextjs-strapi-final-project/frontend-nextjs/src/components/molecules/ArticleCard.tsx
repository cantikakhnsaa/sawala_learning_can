import Link from "next/link";
import type { StrapiArticle } from "@/types/article";
import { Badge } from "@/components/atoms/Badge";

export function ArticleCard({ article }: { article: StrapiArticle }) {
  const title = article.title || "Tanpa judul";
  const slug = article.slug || String(article.documentId || article.id);
  const excerpt = article.excerpt || "Buka artikel untuk membaca informasi selengkapnya.";
  return (
    <article className="article-card">
      <Badge>Artikel</Badge>
      <h2><Link href={`/artikel/${slug}`}>{title}</Link></h2>
      <p>{excerpt}</p>
      <div className="article-meta">
        <span>{article.author || "Redaksi"}</span>
        {article.publishedAt && <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("id-ID")}</time>}
      </div>
      <Link className="read-more" href={`/artikel/${slug}`}>Baca selengkapnya →</Link>
    </article>
  );
}
