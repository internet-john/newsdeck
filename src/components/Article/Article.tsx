import React from "react";
import { ArticleProps } from "../../types/Article";
import ArticleActionBar from "./ActionBar.tsx/ArticleActionBar";
import "./Article.css";

const Article: React.FC<ArticleProps> = ({ article, idx }) => {
  return (
    <li className="articles__aside--listing" key={idx}>
      <div id="listing__content">
        <a
          target="_blank"
          rel="noreferrer"
          id="listing__link"
          href={article.url}
        >
          <div id="listing__textwrapper">
            <div id="listing__title">{article.title}</div>
          </div>
        </a>
        <ArticleActionBar article={article} />
      </div>
    </li>
  );
};

export default Article;
