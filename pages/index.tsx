import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Pet project</title>
      <meta name="description" content="My pet project" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <h1>Home</h1>
      <ButtonContainer>
        <Link href="/render/static">
          <Button>Static</Button>
        </Link>
        <Link href="/render/ssr">
          <Button>SSR</Button>
        </Link>
      </ButtonContainer>
    </Main>
  </div>
);

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 1.5rem;
  background-color: #ffffff;

  &:hover {
    background-color: #cccccc;
    cursor: pointer;
  }
`;
