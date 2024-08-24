import { create } from "zustand";
import { API_BASE_PATH, API_PATH } from "~/utils/constans";

interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null | Date;
}

interface CharacterState {
  characters: Character[];
  next: string | null;
  fetch: () => void;
  fetchMore: () => void;
}

const URL = `${API_BASE_PATH}${API_PATH}/characters`;

const useCharacters = create<CharacterState>((set, get) => ({
    characters: [],
    next: null,
    fetch: async () => {
      const response = await fetch(URL);
      const data = await response.json();
      set({ characters: data.items, next: data.links.next });
    },
    fetchMore: async () => {
      const nextCall = get().next ?? URL;
      const response = await fetch(nextCall);
      const data = await response.json();
      set((state) => ({ characters: [...state.characters, ...data.items] }));
    }
  }),
)

export default useCharacters;