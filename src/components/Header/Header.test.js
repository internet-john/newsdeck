import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header", () => {
  React.act(() => {
    render(<Header />);
  });
  const headernode = screen.getByText(/newsdeck/i);
  expect(headernode).toBeInTheDocument();
});
