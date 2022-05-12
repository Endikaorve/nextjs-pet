import type { NextPage } from "next";
import Head from "next/head";

import Home from "src/ui/pages/Home/Home";

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Pokedex</title>
      <meta property="og:title" content="Pokedex" key="title" />
      <meta name="description" content="Pokedex pet project" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Home />
  </>
);

export default HomePage;
