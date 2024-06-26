import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';

import styles from './navbar.module.scss';
import { Link } from '@/shared/ui/link';

interface Props {
    /**
     * custom class for navbar
     */
    className?: string
}

export function Navbar({ className }: Props) {
    const { t } = useTranslation();
    return (
        <nav className={cn(styles.navbar, className)}>
            <div className={cn(styles.links)}>
                <Link to="/">{t('Главная')}</Link>
                <Link to="/about">{t('О сайте')}</Link>
            </div>

        </nav>
    );
}
