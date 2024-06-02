import React from "react";
import { ArticleProps } from "../../types/Article";
import "./Article.css";

const Article: React.FC<ArticleProps> = ({ article, idx }) => (
  <li className="articles__aside--listing" key={idx}>
    <a target="_blank" rel="noreferrer" id="listing__link" href={article.url}>
      <div id="listing__textwrapper">
        <div id="listing__title">{article.title}</div>
      </div>
    </a>
  </li>
);

export default Article;
