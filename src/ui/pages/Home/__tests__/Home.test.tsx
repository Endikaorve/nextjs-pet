import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
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

  // Cómo se gestiona la asincronía: primero renderiza los skeleton, luego los pokemon. ¿Mockear petición?

  xit("renders the main list", async () => {
    render(<Home />);

    await waitFor(() => {
      screen.getByText("Bulbasaur");
      screen.getByText("Charmander");
      screen.getByText("Squirtlee");
    });
  });
});
