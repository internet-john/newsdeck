import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { ArticleType } from "../types/Article";

interface StoreState {
  bookmarks: ArticleType[];
  addBookmark: (bookmark: ArticleType, bookmarks: ArticleType[]) => void;
  removeBookmark: (bookmark: ArticleType, bookmarks: ArticleType[]) => void;
  clearBookmarks: () => void;
}

const useBookmarksStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        bookmarks: [],
        addBookmark: (bookmark: ArticleType, currentBookmarks: ArticleType[]) =>
          set({
            bookmarks: [...currentBookmarks, bookmark],
          }),
        removeBookmark: (
          bookmark: ArticleType,
          currentBookmarks: ArticleType[]
        ) =>
          set({
            bookmarks: currentBookmarks.filter(
              (book) => book.title !== bookmark.title
            ),
          }),
        clearBookmarks: () => set({ bookmarks: [] }),
      }),

      {
        name: "bookmarks-store",
      }
    )
  )
);

export default useBookmarksStore;
