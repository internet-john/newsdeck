import React from "react";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkRemove } from "react-icons/md";
import { ArticleProps } from "../../types/Article";
import useBookmarksStore from "../../stores/bookmarksStore";
import "./Article.css";

const FeaturedArticle: React.FC<ArticleProps> = ({ article, idx }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarksStore();

  const isAlreadyBookmarked = bookmarks.find(
    (bookmark) => bookmark.title === article.title
  );
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
        <button
          id="bookmark__button"
          onClick={() =>
            isAlreadyBookmarked
              ? removeBookmark(article, bookmarks)
              : addBookmark(article, bookmarks)
          }
        >
          {isAlreadyBookmarked ? (
            <MdOutlineBookmarkRemove />
          ) : (
            <MdOutlineBookmarkAdd />
          )}
        </button>
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
