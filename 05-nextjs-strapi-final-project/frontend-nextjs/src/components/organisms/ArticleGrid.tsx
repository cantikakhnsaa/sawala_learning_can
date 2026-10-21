import type { StrapiArticle } from "@/types/article";
import { ArticleCard } from "@/components/molecules/ArticleCard";

export function ArticleGrid({ articles }: { articles: StrapiArticle[] }) {
  if (articles.length === 0) {
    return <p className="empty-state">Belum ada artikel terbit di Strapi. Periksa status Published dan izin API.</p>;
  }

  return (
    <div className="article-grid">
      {articles.map((article) => (
        <ArticleCard key={article.documentId || article.id} article={article} />
      ))}
    </div>
  );
}
