import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreState {
  currentView: string;
  viewArticles: () => void;
  viewBookmarks: () => void;
}

export enum Views {
  ARTICLES = "articles",
  BOOKMARKS = "bookmarks",
}

const useViewStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        currentView: Views.ARTICLES,
        viewArticles: () =>
          set({
            currentView: Views.ARTICLES,
          }),
        viewBookmarks: () =>
          set({
            currentView: Views.BOOKMARKS,
          }),
      }),
      {
        name: "view-store",
      }
    )
  )
);

export default useViewStore;
