import { useEffect, useState } from "react";

import Image from "next/image";

import styled from "styled-components";
import { Color, ColorType } from "styles/theme/Colors";

import Header from "src/ui/components/Header/Header";

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
    const pokemonByName = await PokemonService.getByName(pokemonId);
    setPokemon(pokemonByName);
  };

  if (!pokemon)
    return (
      <>
        <Header />
        <MainContainer>Cargando...</MainContainer>
      </>
    );

  const [mainType] = pokemon.types;

  return (
    <>
      <Header />
      <MainContainer>
        <ImageContainer type={mainType}>
          <ImageWrapper>
            <Image
              src={pokemon.altImg}
              alt={pokemon.id}
              layout={"fill"}
              objectFit={"contain"}
              quality={100}
            />
          </ImageWrapper>
        </ImageContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
  width: 100%;
`;

const ImageContainer = styled.div<{
  type: ColorType;
}>`
  width: 50%;
  max-height: 60%;
  aspect-ratio: 1 / 1;
  padding: 24px;
  margin: 0 auto;

  background-color: white;
  border-radius: 12px;
  border: ${({ type }) => `6px solid ${Color[type]}`};
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default PokemonDetails;
