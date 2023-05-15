import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

// it("check for todo header", () => {
//   render(<Header />);
//   let element = screen.getByText(/deepak/i);
//   expect(element).toBeInTheDocument();
// });

// it("check for props in header", () => {
//   let title = "My App";
//   render(<Header text={title} />);
//   //   let element = screen.getByText(title);
//   //   let element = screen.getAllByRole("heading");
//   //   expect(element).toBeInTheDocument();
//   let element = screen.getByTitle("my-title");
//   //   expect(element).toBeInTheDocument();
//   expect(element).toBeVisible();
// });

// it("header must invisible on click", () => {
//   let title = "My App";
//   render(<Header text={title} />);
//   let heading = screen.getByTitle("my-title");
//   let button = screen.getByRole("button");

//   // click ===> events ==> fireEvent
//   fireEvent.click(button);
//   // head must me invisible
//   expect(heading).not.toBeVisible();
// });
