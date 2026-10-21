export type StrapiImage = {
  url: string;
  alternativeText?: string | null;
};

export type StrapiArticleAttributes = {
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: unknown;
  author?: string | null;
  publishedAt?: string | null;
  coverImage?: StrapiImage | null;
};

export type StrapiArticle = {
  id: number;
  documentId?: string;
  attributes?: StrapiArticleAttributes;
} & StrapiArticleAttributes;

export type StrapiListResponse = {
  data: StrapiArticle[];
  meta?: unknown;
};
