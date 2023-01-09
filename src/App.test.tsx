import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render app component", () => {
  render(<App />);
  const element = screen.getByTestId("app");
  expect(element).toBeInTheDocument();
});

test("should render controls component", () => {
  render(<App />);
  const element = screen.getByTestId("controls");
  expect(element).toBeInTheDocument();
});

test("should render results component", () => {
  render(<App />);
  const element = screen.getByTestId("results");
  expect(element).toBeInTheDocument();
});
