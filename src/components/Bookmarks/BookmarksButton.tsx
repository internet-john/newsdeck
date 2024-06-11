import React from "react";
import useViewStore from "../../stores/viewStore";

const BookmarksButton: React.FC = () => {
  const { viewBookmarks } = useViewStore();

  return <div onClick={viewBookmarks}>Your bookmarks</div>;
};

export default BookmarksButton;
