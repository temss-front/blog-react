import classNames from '@/shared/lib/classNames';

import styles from './loader.module.scss';

interface Props {
    className?: string
}

export function Loader({ className }: Props) {
    return (
        <div className={classNames(styles.loader, className)}>
            <div />
            <div />
            <div />
        </div>
    );
}
