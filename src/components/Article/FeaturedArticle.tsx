import React from "react";
import { ArticleProps } from "../../types/Article";
import "./Article.css";

const FeaturedArticle: React.FC<ArticleProps> = ({ article, idx }) => (
  <li className="articles__featured--listing" key={idx}>
    <a target="_blank" rel="noreferrer" id="listing__link" href={article.url}>
      <div id="listing__textwrapper">
        <div id="listing__title">{article.title}</div>
        <div id="listing__description">{article.description}</div>
      </div>
    </a>
    <img
      src={article.urlToImage}
      alt={article.content}
      loading={idx > 2 ? "lazy" : "eager"}
    />
  </li>
);

export default FeaturedArticle;
