import { render, screen, fireEvent } from "@testing-library/react";
import ToDoInput from "./ToDoInput";

// on change input must changes

// mock methods ==> dummy
let mockChangeInput = jest.fn;
let mockSaveToDo = jest.fn;

describe("toDoInput", () => {
  it("on change input must changes", () => {
    render(<ToDoInput changeInput={mockChangeInput} saveToDo={mockSaveToDo} />);
    let inputElement = screen.getByPlaceholderText(/Enter Todo/i);
    fireEvent.change(inputElement, { target: { value: "my-sample" } });

    expect(inputElement.value).toBe("my-sample");
  });

  // on btn click & reset input
  it("on btn click input must input", async () => {
    render(<ToDoInput changeInput={mockChangeInput} saveToDo={mockSaveToDo} />);
    let inputElement = await screen.findByPlaceholderText(/Enter Todo/i);
    let button = await screen.findByRole("button");
    //fireEvent.change(inputElement, { target: { value: "my-sample" } });
    fireEvent.click(button);
    expect(inputElement.value).toBe("");
  });
});
