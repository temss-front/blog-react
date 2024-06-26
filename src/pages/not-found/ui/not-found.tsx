import { useTranslation } from 'react-i18next';
import classNames from '@/shared/lib/classNames';

import styles from './not-found.module.scss';

interface Props {
    className?: string
}

export function NotFoundPage({ className }: Props) {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.notFound, className)}>
            {t('Страница не найдена')}
        </div>
    );
}
