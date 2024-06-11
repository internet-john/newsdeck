interface BookmarkProps {
  bookmarkTitle: string;
}
const Bookmark: React.FC<BookmarkProps> = ({ bookmarkTitle }) => {
  return <div>{bookmarkTitle}</div>;
};

export default Bookmark;
