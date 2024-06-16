import React from "react";
import CategoryBar from "../Category/CategoryBar";
import Search from "../Search/Search";
import { Weather } from "../Weather/Weather";
import "./NavBar.css";

export interface NavBarComponentProps {
  onSearch: (search: string) => void;
  currentCategory: string;
  onClickCategory: (category: string) => void;
}

const NavBar: React.FC<NavBarComponentProps> = ({
  onSearch,
  currentCategory,
  onClickCategory,
}) => (
  <div id="navbar">
    <Weather />

    <CategoryBar
      currentCategory={currentCategory}
      onClickCategory={onClickCategory}
    />
    <Search onSearch={onSearch} />
  </div>
);

export default NavBar;
