import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

import styles from './Auth.module.css';

/** Register page component. */
const RegisterPageComponent: FC = () => (
  <div className={styles['form']}>
    <h1 className={styles['form__title']}>Register</h1>
    <RegisterForm />
    <Link to={'/login'}>Already have an account? Login!</Link>
  </div>
);

export const RegisterPage = memo(RegisterPageComponent);
