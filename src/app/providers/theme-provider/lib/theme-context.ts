import React, { createContext } from 'react';

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
}

export type ThemeContextType = {
    theme?: THEME;
    setTheme?: React.Dispatch<React.SetStateAction<THEME>>
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType>({});
