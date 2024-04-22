import React, {useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "./ThemeContext";

type Props = {
    children?: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT

export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme)

    const defaultProps = useMemo(() => {
        return {theme, setTheme}
    }, [theme])


    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};