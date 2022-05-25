import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  it("renders the main header", () => {
    render(<Home />);

    const heading = screen.getByRole("banner");
    const mainLogo = screen.getByRole("img", {
      name: "main-logo",
    });

    expect(heading).toBeInTheDocument();
    expect(mainLogo).toBeInTheDocument();
  });
});
