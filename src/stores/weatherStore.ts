import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreState {
  data: any | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
}

const useWeatherStore = create<StoreState>()(
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

            let temp =
              data?.timelines?.daily?.[0]?.values?.temperatureMax * (9 / 5) +
              32;

            set({ data: Math.ceil(temp), loading: false });
          } catch (error) {
            set({ error: (error as Error).message, loading: false });
          }
        },
      }),
      {
        name: "weather-store",
      }
    )
  )
);

export default useWeatherStore;
