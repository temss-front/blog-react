import { Link as RouterLink, LinkProps } from 'react-router-dom';

import cn from '@/shared/lib/classNames';

import styles from './link.module.scss';

interface Props extends LinkProps {
    className?: string;
}

export function Link({
    to, children, className, ...props
}: Props) {
    return (
        <RouterLink
            className={cn(styles.link, className)}
            to={to}
            {...props}
        >
            {children}
        </RouterLink>
    );
}
