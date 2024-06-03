import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreState {
  bookmarks: string[];
  addBookmark: (bookmark: string, bookmarks: string[]) => void;
  removeBookmark: (bookmark: string, bookmarks: string[]) => void;
  //   loading: boolean;
  //   error: string | null;
  //   fetchData: (url: string) => Promise<void>;
}

const useBookmarksStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        bookmarks: ["1,2", "3"],
        addBookmark: (bookmark: string, currentBookmarks: string[]) =>
          set({
            bookmarks: [...currentBookmarks, bookmark],
          }),
        removeBookmark: (bookmark: string, currentBookmarks: string[]) =>
          set({
            bookmarks: currentBookmarks.filter((book) => book !== bookmark),
          }),
        // loading: false,
        // error: null,
        // fetchData: async (url: string) => {
        //   set({ loading: true, error: null });
        //   try {
        //     const response = await fetch(url);
        //     if (!response.ok) {
        //       throw new Error("Network response was not ok");
        //     }
        //     const data = await response.json();

        //     let temp =
        //       data?.timelines?.daily?.[0]?.values?.temperatureMax * (9 / 5) +
        //       32;

        //     set({ data: Math.ceil(temp), loading: false });
        //   } catch (error) {
        //     set({ error: (error as Error).message, loading: false });
        //   }
        // },
      }),
      {
        name: "bookmarks-store",
      }
    )
  )
);

export default useBookmarksStore;
