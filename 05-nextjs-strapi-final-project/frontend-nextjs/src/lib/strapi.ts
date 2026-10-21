import type { StrapiArticle, StrapiListResponse } from "@/types/article";

const STRAPI_URL = (
  process.env.STRAPI_URL || "http://localhost:1337"
).replace(/\/$/, "");

function normalizeArticle(item: StrapiArticle): StrapiArticle {
  return item.attributes
    ? { id: item.id, documentId: item.documentId, ...item.attributes }
    : item;
}

export async function getArticles(): Promise<StrapiArticle[]> {
  const headers: HeadersInit = {};

  if (process.env.STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
  }

  const response = await fetch(
    `${STRAPI_URL}/api/articles?status=published&sort=publishedAt:desc&populate=coverImage`,
    { headers, next: { revalidate: 60 } }
  );

  if (!response.ok) {
    throw new Error(
      `Strapi mengembalikan HTTP ${response.status}. Periksa STRAPI_URL dan akses API.`
    );
  }

  const result = (await response.json()) as StrapiListResponse;
  return (result.data || []).map(normalizeArticle);
}
