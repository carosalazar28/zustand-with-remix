import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isDark: boolean;
  toggle: (by: boolean) => void;
}

const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggle: (dark) => set(() => ({ isDark: dark })),
    }),
    { 
      name: 'theme-storage',
      skipHydration: true,
    }
  ),
)

export default useTheme;