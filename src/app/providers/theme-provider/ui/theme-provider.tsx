import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from '../lib/theme-context';

type Props = {
    children?: React.ReactNode;
};

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}
