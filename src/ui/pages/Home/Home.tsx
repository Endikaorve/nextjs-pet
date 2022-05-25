import { useEffect, useState } from "react";

import styled from "styled-components";

import Header from "src/ui/components/Header/Header";
import PokeCard from "./_components/PokeCard/PokeCard";
import PokeCardSkeleton from "./_components/PokeCardSkeleton/PokeCardSkeleton";

import { Pokemon } from "src/core/Pokemon/domain/Pokemon";
import PokemonService from "src/core/Pokemon/services/PokemonService";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>(undefined);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const pokemonsList = await PokemonService.getAll();
      setPokemons(pokemonsList);
    } catch (e) {}
  };

  return (
    <>
      <Header />
      <PokeContainer>
        {!pokemons &&
          Array.from(Array(12).keys()).map((i) => <PokeCardSkeleton key={i} />)}
        {pokemons && pokemons.map((p) => <PokeCard key={p.id} pokemon={p} />)}
      </PokeContainer>
    </>
  );
};

const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

export default Home;
