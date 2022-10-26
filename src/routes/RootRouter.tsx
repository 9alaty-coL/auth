import { FC } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { AuthorizedGuard } from './guards';
import { authRoutes } from '../features/auth/routes';
import { privateRoutes } from '../features/private/routes';

export const HOME_PAGE = '/login';
export const LOGIN_PAGE = '/login';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={HOME_PAGE}/>,
  },
  {
    path: 'aaa',
    element: <h1>asd</h1>,
  },
  {
    path: '*',
    element: <>Page not found</>,
  },
  {
    element: (
      <>
        <AuthorizedGuard />
      </>
    ),
    children: [...privateRoutes],
  },
  ...authRoutes,
];

/** Root router component. */
export const RootRouter: FC = () => useRoutes(routes);
