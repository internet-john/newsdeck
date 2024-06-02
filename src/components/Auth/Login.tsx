import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button id="button__login" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
