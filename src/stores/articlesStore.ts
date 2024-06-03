import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreState {
  data: any | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}

const useArticlesStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        loading: false,
        error: null,
        fetchData: async (url: string) => {
          set({ loading: true, error: null });
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            set({ data, loading: false });
          } catch (error) {
            set({ error: (error as Error).message, loading: false });
          }
        },
      }),
      {
        name: "articles-store",
      }
    )
  )
);

export default useArticlesStore;
