import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './theme-context';

export type UseThemeReturn = { theme: THEME; toggleTheme: () => void };

export const useTheme = (): UseThemeReturn => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
};
