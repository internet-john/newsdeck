import React from "react";
import "./CategoryBar.css";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

interface CategoryBarProps {
  currentCategory: string;
  onClickCategory: (category: string) => void;
}
const CategoryBar: React.FC<CategoryBarProps> = ({
  currentCategory,
  onClickCategory,
}) => {
  return (
    <ul id="categorybar">
      {categories.map((category, idx) => (
        <li
          id={`category${
            currentCategory.toString() === category ? "--active" : ""
          }`}
          key={idx}
        >
          <button onClick={(e: any) => onClickCategory(e)} value={category}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBar;
