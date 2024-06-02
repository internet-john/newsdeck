import React from "react";
import { useState } from "react";
import "./Search.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeInput = (e: any) => {
    const searchVal = e.target.value;

    if (searchVal.charCodeAt(-1) === 13) {
      onClickSubmit(searchValue);
    }

    setSearchValue(e.target.value);
  };

  const onClickSubmit = (e: any) => {
    e.preventDefault();

    onSearch(searchValue);
  };

  return (
    <form id="search-wrapper" onSubmit={onClickSubmit}>
      <input
        type="search"
        value={searchValue}
        onChange={onChangeInput}
        onSubmit={onClickSubmit}
      />
    </form>
  );
};

export default Search;
