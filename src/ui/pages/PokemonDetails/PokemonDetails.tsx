import { useEffect, useState } from "react";

import styled from "styled-components";

import { Pokemon } from "src/core/Pokemon/domain/Pokemon";
import PokemonService from "src/core/Pokemon/services/PokemonService";

interface Props {
  pokemonId: string;
}

const PokemonDetails: React.FC<Props> = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const pokemonsById = await PokemonService.getById(pokemonId);
    setPokemon(pokemonsById);
  };

  if (!pokemon) return <>Cargando...</>;

  return <div>{pokemon.id}</div>;
};

const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

export default PokemonDetails;
