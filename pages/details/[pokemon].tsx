import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import PokemonDetails from "src/ui/pages/PokemonDetails/PokemonDetails";

// import Home from "src/ui/pages/Home/Home";

const PokemonDetailsPage: NextPage = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  if (!pokemon || typeof pokemon !== "string") return <></>;

  return (
    <>
      {/* ## TODO: Duda para Stefan: en caso de aislar lógica de React de lógica de Next, cómo gestionas el Head cuando aún no tienes los datos */}
      <Head>
        <title>Pokedex</title>
        <meta property="og:title" content="Pokedex" key="title" />
        <meta name="description" content="Pokedex pet project" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PokemonDetails pokemonId={pokemon} />
    </>
  );
};

export default PokemonDetailsPage;
