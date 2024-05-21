import './styles/index.scss';

import { Suspense } from 'react';
import { useTheme } from '@/app/providers/theme-provider';
import cn from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/side-bar';
import { AppRouter } from '@/app/providers/router';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={cn('app', theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
