import React from "react";
import { ArticleProps } from "../../types/Article";
import ArticleActionBar from "./ActionBar.tsx/ArticleActionBar";
import "./Article.css";

const FeaturedArticle: React.FC<ArticleProps> = ({ article, idx }) => {
  return (
    <li className="articles__featured--listing" key={idx}>
      <div id="listing__content">
        <a
          target="_blank"
          rel="noreferrer"
          id="listing__link"
          href={article.url}
        >
          <div id="listing__textwrapper">
            <div id="listing__title">{article.title}</div>
            <div id="listing__description">{article.description}</div>
          </div>
        </a>
        <ArticleActionBar article={article} />
      </div>

      <img
        src={article.urlToImage}
        alt={article.content}
        loading={idx > 2 ? "lazy" : "eager"}
      />
    </li>
  );
};

export default FeaturedArticle;
