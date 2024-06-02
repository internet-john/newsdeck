import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryBar from "./CategoryBar";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

test("renders category buttons with correct labels", () => {
  React.act(() => {
    render(<CategoryBar currentCategory={""} onClickCategory={() => {}} />);
  });

  categories.forEach((category) => {
    const categoryButton = screen.getByText(category);
    expect(categoryButton).toBeInTheDocument();
  });
});
