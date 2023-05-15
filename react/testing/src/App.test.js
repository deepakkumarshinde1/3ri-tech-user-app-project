import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("check the todo", async () => {
  render(<App />);
  let inputElement = await screen.findByPlaceholderText(/Enter Todo/i);
  let button = await screen.findByTestId("save-button");
  fireEvent.change(inputElement, { target: { value: "my-sample" } });
  fireEvent.click(button);
  let listItem = screen.getByTitle(/list-item/i);
  expect(listItem).toBeInTheDocument();
});
