import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("my 1st test case", () => {
  render(<Header />);
  // query
  let element = screen.getByText(/hi/i);
  // assert
  expect(element).toBeInTheDocument();
});
