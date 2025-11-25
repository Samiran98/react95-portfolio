import { create } from 'zustand';

interface AuthStore {
    isLoggedIn: boolean;
    username: string;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    username: '',
    login: (username: string, password: string) => {
        // Simple validation - you can customize this
        if (username.trim() && password.trim()) {
            set({ isLoggedIn: true, username });
            return true;
        }
        return false;
    },
    logout: () => {
        set({ isLoggedIn: false, username: '' });
    },
}));