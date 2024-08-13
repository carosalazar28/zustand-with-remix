import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  login: (by: string) => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      login: (token) => set(() => ({ token: token })),
    }),
    { 
      name: 'auth',
    }
  ),
)

export default useAuth;