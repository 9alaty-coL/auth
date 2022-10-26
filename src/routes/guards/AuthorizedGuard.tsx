import { FC, memo } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../RootRouter';

const AuthorizedGuardComponent: FC = () => {
  const isAuthorized = !!localStorage.getItem('AUTH_TOKEN');
  return isAuthorized ? <Outlet /> : <Navigate to={LOGIN_PAGE}></Navigate>;
};

export const AuthorizedGuard = memo(AuthorizedGuardComponent);
