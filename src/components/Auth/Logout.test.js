import React from "react";
import { render, screen } from "@testing-library/react";
import LogoutButton from "./Logout";

test("renders log out button", () => {
  React.act(() => {
    render(<LogoutButton />);
  });
  const loginButton = screen.getByText(/Log out/i);
  expect(loginButton).toBeInTheDocument();
});
