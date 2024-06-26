import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ROUTER_CONFIG } from '@/shared/config/router-config';
import { SuspenseLoader } from '@/widgets/suspense-loader';

export function AppRouter() {
    return (
        <Routes>
            {ROUTER_CONFIG.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<SuspenseLoader />}>
                            <section className="page-wrapper">{element}</section>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>

    );
}
