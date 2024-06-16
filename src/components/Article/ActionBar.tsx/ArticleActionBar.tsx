import React from "react";
import {
  MdOutlineBookmarkAdd,
  MdOutlineBookmarkRemove,
  MdShare,
} from "react-icons/md";
import { ArticleType } from "../../../types/Article";
import useBookmarksStore from "../../../stores/bookmarksStore";
import "./ArticleActionBar.css";

interface ArticleActionBarProps {
  article: ArticleType;
}

const ArticleActionBar: React.FC<ArticleActionBarProps> = ({ article }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarksStore();

  const isAlreadyBookmarked = bookmarks.find(
    (bookmark) => bookmark.title === article.title
  );
  return (
    <>
      <button
        id="button--bookmark"
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
      <button id="button--share" onClick={() => true}>
        <MdShare />
      </button>
    </>
  );
};

export default ArticleActionBar;
