import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@/pages/not-found';

export enum ROUTES {
    MAIN = 'main',
    NOT_FOUND = 'not_found',

}

export const ROUTER_PATHS: Record<ROUTES, string> = {
    [ROUTES.MAIN]: '/',
    [ROUTES.NOT_FOUND]: '*',

};

export const ROUTER_CONFIG: RouteProps[] = [
    {
        path: ROUTER_PATHS[ROUTES.MAIN],
        element: <div>Main</div>,
    },
    {
        path: ROUTER_PATHS[ROUTES.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
