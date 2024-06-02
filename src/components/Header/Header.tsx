import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Weather } from "../Weather/Weather";

import "./Header.css";

import Profile from "../Auth/Profile";
import LoginButton from "../Auth/Login";

export const Header: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <header id="header">
      <div id="top-row">
        <div id="header__title">newsdeck</div>
        <div id="header__details">
          {isAuthenticated && !isLoading ? <Profile /> : <LoginButton />}
        </div>
      </div>
      <Weather />
    </header>
  );
};

export default Header;
