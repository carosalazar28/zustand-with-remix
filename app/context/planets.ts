import { create } from "zustand";
import { API_BASE_PATH, API_PATH } from "~/utils/constans";

import { Character } from "./characters";

interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: null | Date;
  characters: Character[]
}

interface PlanetState {
  planets: Planet[];
  next: string | null;
  fetch: () => void;
  fetchMore: () => void;
}

const URL = `${API_BASE_PATH}${API_PATH}/planets`;

const usePlanets = create<PlanetState>((set, get) => ({
    planets: [],
    next: null,
    fetch: async () => {
      const response = await fetch(URL);
      const data = await response.json();
      set({ planets: data.items, next: data.links.next });
    },
    fetchMore: async () => {
      const nextCall = get().next ?? URL;
      const response = await fetch(nextCall);
      const data = await response.json();
      set((state) => ({ planets: [...state.planets, ...data.items] }));
    }
  }),
)

export default usePlanets;