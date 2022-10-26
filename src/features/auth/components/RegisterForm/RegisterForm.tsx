import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, memo } from "react";
import styles from "../AuthForm.module.css";

const RegisterFormComponent: FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      fetch('https://auth-api-server.vercel.app/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(result => alert(result.message))
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
      <label>Name</label>
      <TextField
        required
        variant="outlined"
        placeholder="John Doe"
        name="name"
        value={formik.values.name}
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

export const RegisterForm = memo(RegisterFormComponent);
