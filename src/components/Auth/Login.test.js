import React from "react";
import { render, screen } from "@testing-library/react";
import LoginButton from "./Login";

test("renders log in button", () => {
  React.act(() => {
    render(<LoginButton />);
  });
  const loginButton = screen.getByText(/Log in/i);
  expect(loginButton).toBeInTheDocument();
});
