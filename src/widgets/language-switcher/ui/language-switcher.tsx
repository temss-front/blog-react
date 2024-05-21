import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import classNames from '@/shared/lib/classNames';

import styles from './language-switcher.module.scss';
import { Button, BUTTON_VIEW } from '@/shared/ui/button';

interface Props {
    className?: string
}

export function LanguageSwitcher({ className }: Props) {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        if (className) {
            console.log(className);
        }
    }, []);

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(styles.languageSwitcher, className)}
            view={BUTTON_VIEW.GHOST}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
}
