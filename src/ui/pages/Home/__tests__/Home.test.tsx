import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from "../Home";

const server = setupServer(
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
          },
        ],
      })
    );
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Bulbasaur",
        height: 7,
        weight: 69,
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/",
            },
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/",
            },
          },
        ],
        sprites: {
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            },
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
          },
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home", () => {
  it("renders the main header", () => {
    render(<Home />);

    const header = screen.getByRole("banner");
    const mainLogo = screen.getByRole("img", {
      name: "main-logo",
    });

    expect(header).toBeInTheDocument();
    expect(mainLogo).toBeInTheDocument();
  });

  it("renders the main list", async () => {
    render(<Home />);

    expect(screen.queryByText("Bulbasaur")).toBeNull();

    expect(await screen.findByText("Bulbasaur")).toBeInTheDocument();
  });

  it("renders when request fails", async () => {
    server.use(
      rest.get(
        "https://pokeapi.co/api/v2/pokemon", //?limit=20&offset=0
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Home />);

    expect(screen.queryByText("Bulbasaur")).toBeNull();

    expect(await screen.findByText("Ha habido un error.")).toBeInTheDocument();
  });
});

describe("Home navigation", () => {
  it("should navigate from home to pokemon details and back to home", async () => {
    render(<Home />);

    expect(screen.queryByText("Bulbasaur")).toBeNull();

    expect(await screen.findByText("Bulbasaur")).toBeInTheDocument();
  });
});
