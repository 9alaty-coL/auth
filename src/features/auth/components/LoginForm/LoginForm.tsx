import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, memo } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../AuthForm.module.css";

const LoginFormComponent: FC = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      fetch('https://auth-api-server.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(result => {
        if (result.message) {
          alert(result.message);
          return;
        }
        localStorage.setItem('AUTH_TOKEN', result.AUTH_TOKEN);
        navigate('/users')
      })
    },
  });
  return (
    <form className={styles["form"]} onSubmit={formik.handleSubmit}>
      <label>Username</label>
      <TextField
        required
        variant="outlined"
        placeholder="John Doe"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <label>Password</label>
      <TextField
        required
        variant="outlined"
        placeholder="******"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export const LoginForm = memo(LoginFormComponent);
