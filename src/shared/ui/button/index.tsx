import React from 'react';
import cn from '@/shared/lib/classNames';

import styles from './button.module.scss';

export enum BUTTON_VIEW {
    GHOST = 'ghost',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: React.ReactNode
    view?: BUTTON_VIEW
}

export function Button({
    className, onClick, children, view, ...props
}: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(styles.button, styles[view], className)}
            {...props}
        >
            {children}
        </button>
    );
}
