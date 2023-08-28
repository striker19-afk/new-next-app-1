"use client";

import LoginForm from "~/components/auth/LoginForm";

const Login = () => {
  return (
    <LoginForm
      onSubmit={(e) => {
        e.preventDefault();
        // handle signin
      }}
    />
  );
};

export default Login;
