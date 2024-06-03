import React from "react";
import useBookmarksStore from "../../stores/bookmarksStore";

const Bookmarks: React.FC = () => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarksStore();

  return <div>Your bookmarks : {bookmarks}</div>;
};

export default Bookmarks;
