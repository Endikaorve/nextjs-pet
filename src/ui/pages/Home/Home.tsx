import { useEffect, useState } from "react";

import Header from "./_components/Header/Header";
import PokeCard from "./_components/PokeCard/PokeCard";
import PokeCardSkeleton from "./_components/PokeCardSkeleton/PokeCardSkeleton";

import styled from "styled-components";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const simplifiedPokemons: any = await response.json();

    const ppp = await Promise.all(
      simplifiedPokemons.results.map((p: any) => {
        return fetch(p.url).then((res) => res.json());
      })
    );

    const detailedPokemons = ppp.map((p) => ({
      id: p["id"],
      name: p["name"],
      height: parseInt(p["height"]) / 10,
      weight: parseInt(p["weight"]) / 10,
      types: p["types"].map((type: any) => type.type.name),
      img: p["sprites"]["other"]["official-artwork"]["front_default"],
      alt_img: p["sprites"]["other"]["dream_world"]["front_default"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus. Nam quis mauris elementum, ullamcorper sem non, convallis mi. Sed a bibendum sapien, non posuere ligula. Morbi sit amet maximus purus. Nulla eu pulvinar ante. Nulla gravida luctus convallis. Duis suscipit vel nisi et tincidunt. Aenean velit purus, rutrum euismod justo id, porta tincidunt orci. Curabitur quis nibh elit. Etiam ornare tortor ac nibh commodo dapibus. Proin vehicula erat sit amet lacus posuere tincidunt.",
    }));

    setPokemons(detailedPokemons);
  };

  console.log("pokemons", pokemons);

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
