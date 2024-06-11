import React from "react";
import { ArticleProps } from "../../types/Article";
import "./Article.css";
import useBookmarksStore from "../../stores/bookmarksStore";

const FeaturedArticle: React.FC<ArticleProps> = ({ article, idx }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarksStore();

  const isAlreadyBookmarked = bookmarks.find(
    (bookmark) => bookmark.title === article.title
  );
  return (
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

      <button
        id="bookmark__button"
        onClick={() =>
          isAlreadyBookmarked
            ? removeBookmark(article, bookmarks)
            : addBookmark(article, bookmarks)
        }
      >
        {isAlreadyBookmarked ? "Remove Bookmark" : "Add Bookmark"}
      </button>
    </li>
  );
};

export default FeaturedArticle;
