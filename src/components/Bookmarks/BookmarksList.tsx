import useBookmarksStore from "../../stores/bookmarksStore";
import Bookmark from "./Bookmark";

const BookmarksList: React.FC = () => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarksStore();

  return (
    <div>
      {bookmarks.map((entry, idx) => (
        <Bookmark key={idx} bookmarkTitle={entry} />
      ))}
    </div>
  );
};

export default BookmarksList;
