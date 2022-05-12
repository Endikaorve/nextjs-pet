import Image from "next/image";
import styled from "styled-components";

const Header: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Image
        src={"/assets/images/logo.png"}
        alt={"main-logo"}
        quality={100}
        layout={"fill"}
        objectFit={"contain"}
        priority
      />
    </ImageWrapper>
  </Container>
);

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Header;
