import { RouteObject } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';

export const privateRoutes: RouteObject[] = [
  {
    path: 'users',
    element: <UsersPage />,
  },
];
