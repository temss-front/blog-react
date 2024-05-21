import React, { useState } from 'react';
import classNames from '@/shared/lib/classNames';
import styles from './side-bar.module.scss';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LanguageSwitcher } from '@/widgets/language-switcher';

interface Props {
    className?: string
}

export function SideBar({ className }: Props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={classNames(styles.sideBar, { [styles.collapsed]: collapsed }, className)}>
            <button type="button" onClick={() => setCollapsed((prev) => !prev)}>Toggle</button>
            <div className={styles.switchers}>
                <LanguageSwitcher className={classNames(
                    styles.languageSwitcher,
                    { [styles.collapsedLanguageSwitcher]: collapsed },
                )}
                />
                <ThemeSwitcher />
            </div>
        </div>
    );
}
