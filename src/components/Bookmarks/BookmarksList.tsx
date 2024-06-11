import useBookmarksStore from "../../stores/bookmarksStore";
import FeaturedArticle from "../Article/FeaturedArticle";
import "./Bookmarks.css";

const BookmarksList: React.FC = () => {
  const { bookmarks, clearBookmarks } = useBookmarksStore();

  return bookmarks && bookmarks.length ? (
    <>
      <button onClick={clearBookmarks}>Clear bookmarks</button>
      <div id="bookmarks">
        {bookmarks.map((entry, idx) => (
          <FeaturedArticle idx={idx} article={entry} />
        ))}
      </div>
    </>
  ) : (
    <div>Nothing yet</div>
  );
};

export default BookmarksList;
