import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { Pokemon } from "src/core/Pokemon/domain/Pokemon";
import PokeCard from "../PokeCard";

const fakePokemon: Pokemon = {
  id: "1",
  name: "Bulbasaur",
  height: 6.9,
  weight: 0.7,
  types: ["grass", "poison"],
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  altImg:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  description: "Lorem ipsum dolor sit emet",
};

// DUDAS: ¿1 solo test que compruebe todo o un test por cada campo a comprobar?

describe("PokeCard", () => {
  beforeEach(() => {
    render(<PokeCard pokemon={fakePokemon} />);
  });

  it("renders the complete card", () => {
    const pokemonName = screen.getByText(fakePokemon.name);
    const pokemonID = screen.getByText(`#${fakePokemon.id}`);
    const pokemonImage = screen.getByRole("img", {
      name: fakePokemon.id,
    });
    const pokemonWeight = screen.getByText(`${fakePokemon.weight} kg`);
    const pokemonHeight = screen.getByText(`${fakePokemon.height} m`);
    const pokemonDescription = screen.getByText(fakePokemon.description);

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonID).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonHeight).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonDescription).toBeInTheDocument();
  });

  it("renders the name", () => {
    const pokemonName = screen.getByText(fakePokemon.name);

    expect(pokemonName).toBeInTheDocument();
  });

  it("renders the ID", () => {
    const pokemonID = screen.getByText(`#${fakePokemon.id}`);

    expect(pokemonID).toBeInTheDocument();
  });

  it("renders the image", () => {
    const pokemonImage = screen.getByRole("img", {
      name: fakePokemon.id,
    });

    expect(pokemonImage).toBeInTheDocument();
  });
});

describe("PokeCard Snapshot", () => {
  it("Snapshots", () => {
    const pokeCard = renderer
      .create(<PokeCard pokemon={fakePokemon} />)
      .toJSON();
    expect(pokeCard).toMatchSnapshot();
  });
});
