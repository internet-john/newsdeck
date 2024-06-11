import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreState {
  bookmarks: string[];
  addBookmark: (bookmark: string, bookmarks: string[]) => void;
  removeBookmark: (bookmark: string, bookmarks: string[]) => void;
}

const useBookmarksStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        bookmarks: ["cat", "in the", "hat"],
        addBookmark: (bookmark: string, currentBookmarks: string[]) =>
          set({
            bookmarks: [...currentBookmarks, bookmark],
          }),
        removeBookmark: (bookmark: string, currentBookmarks: string[]) =>
          set({
            bookmarks: currentBookmarks.filter((book) => book !== bookmark),
          }),
      }),
      {
        name: "bookmarks-store",
      }
    )
  )
);

export default useBookmarksStore;
