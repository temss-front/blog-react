import React from 'react';
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
    return (
        <nav className={cn(styles.navbar, className)}>
            <div className={cn(styles.links)}>
                <Link to="/">Главная</Link>
                <Link to="/about">О сайте</Link>
            </div>

        </nav>
    );
}
