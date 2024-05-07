import {Suspense} from 'react';

import {Route, Routes} from 'react-router-dom';
import {ROUTER_CONFIG} from "@/shared/config/router-config";


export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {ROUTER_CONFIG.map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={<section className='page-wrapper'>{element}</section>}/>
                ))}
            </Routes>
        </Suspense>
    );
};
