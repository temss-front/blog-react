import { useTranslation } from 'react-i18next';
import classNames from '@/shared/lib/classNames';

import { Button, BUTTON_VIEW } from '@/shared/ui/button';

interface Props {
    className?: string
}

export function LanguageSwitcher({ className }: Props) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(className)}
            view={BUTTON_VIEW.GHOST}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    );
}
