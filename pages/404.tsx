import type { NextPage } from "next";
import styled from "styled-components";

const Undefined: NextPage = () => {
  return <Container>404</Container>;
};

export default Undefined;

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;

  font-size: 10rem;
`;
