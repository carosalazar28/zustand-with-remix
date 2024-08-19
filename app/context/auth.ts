import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  login: (by: string) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      login: (token) => set(() => ({ token: token })),
      logout: () => set(() => ({ token: null }))
    }),
    { 
      name: 'auth',
    }
  ),
)

export default useAuth;