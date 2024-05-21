import { RouteProps } from 'react-router-dom';

export enum ROUTES {
    MAIN = 'main',

}

export const ROUTER_PATHS: Record<ROUTES, string> = {
    [ROUTES.MAIN]: '/',

};

export const ROUTER_CONFIG: RouteProps[] = [{
    path: ROUTER_PATHS[ROUTES.MAIN],
    element: <div>Main</div>,
},
];
