import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import Article from "./Article";
import "./Article.css";
import { ArticleType } from "../../types/Article";

interface ArticleListProps {
  articles: ArticleType[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  const midwayPt = Math.ceil(articles.length / 2);

  const firstHalf = articles.slice(0, midwayPt);
  const secondHalf = articles.slice(midwayPt);
  return (
    <div id="articles">
      <ul id="articles__featured">
        {firstHalf && firstHalf.length > 0
          ? firstHalf.map((article, idx) => (
              <FeaturedArticle key={idx} article={article} idx={idx} />
            ))
          : []}
      </ul>
      <ul id="articles__aside">
        {secondHalf && secondHalf.length > 0
          ? secondHalf.map((article, idx) => (
              <Article key={idx} article={article} idx={idx} />
            ))
          : []}
      </ul>
    </div>
  );
};

export default ArticleList;
