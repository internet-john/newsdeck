import React from "react";
import CategoryBar from "../Category/CategoryBar";
import Search from "../Search/Search";
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
    <CategoryBar
      currentCategory={currentCategory}
      onClickCategory={onClickCategory}
    />
    <Search onSearch={onSearch} />
  </div>
);

export default NavBar;
