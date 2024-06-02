interface ArticleSource {
  id?: string;
  name: string;
}

export interface ArticleType {
  author?: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage?: string;
}

export interface ArticleProps {
  article: ArticleType;
  idx: number;
}
