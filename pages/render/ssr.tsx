import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  data: number[];
}

const SSR: NextPage<Props> = ({ data }) => {
  return (
    <Container>
      <div>
        <Link href="/">
          <h1>SSR</h1>
        </Link>
        <ul>
          {data.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default SSR;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await wait(3000);

  return {
    props: {
      data: [1, 2, 3],
    },
  };
};

const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;

  font-size: 4rem;
`;
