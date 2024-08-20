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
  fetch: (url?: string) => void;
}

const useCharacters = create<CharacterState>((set) => ({
    characters: [],
    fetch: async (url) => {
      const initialURL = `${API_BASE_PATH}${API_PATH}/characters`;
      const response = await fetch(url || initialURL);
      const data = await response.json();
      set({ characters: data.items });
    },
  }),
)

export default useCharacters;