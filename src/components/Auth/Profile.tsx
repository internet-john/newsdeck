import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import BookmarksButton from "../Bookmarks/BookmarksButton";
import "./Profile.css";

const Profile: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleClickProfile = () => setIsMenuVisible(!isMenuVisible);

  /*
  TODO

  DROPDOWN MENU WHEN CLICKING ON PFP

  FOR NOW JUST LOG OUT

  BUT EVENTUALLY CAN BOOKMARK ARTICLES
  */

  return (
    isAuthenticated && (
      <div id="profile" data-testid="profilediv" onClick={handleClickProfile}>
        <img src={user?.picture} alt={user?.name} />
        {isMenuVisible && (
          <div id="profile__dropdown">
            <BookmarksButton />
            <LogoutButton />
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
