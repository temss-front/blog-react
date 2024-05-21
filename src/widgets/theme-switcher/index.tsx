import React from 'react';
import { THEME, useTheme } from '@/app/providers/theme-provider';
import MoonIcon from '@/shared/assets/icons/moon-icon.svg';
import SunIcon from '@/shared/assets/icons/sun-icon.svg';
import { Button, BUTTON_VIEW } from '@/shared/ui/button';
import classNames from '@/shared/lib/classNames';

import styles from './theme-switcher.module.scss';

interface Props {
    className?: string
}

export function ThemeSwitcher({ className }: Props) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            view={BUTTON_VIEW.GHOST}
            className={classNames(styles.themeSwitcher, className)}
            onClick={toggleTheme}
        >
            {theme === THEME.DARK ? <SunIcon fill="var(--primary-color)" /> : <MoonIcon fill="var(--primary-color)" />}
        </Button>
    );
}
