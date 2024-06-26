import classNames from '@/shared/lib/classNames';

import styles from './suspense-loader.module.scss';
import { Loader } from '@/shared/ui/loader';

interface Props {
    className?: string
}

export function SuspenseLoader({ className }: Props) {
    return (
        <div className={classNames(styles.suspenseLoader, className)}>
            <Loader />
        </div>
    );
}
