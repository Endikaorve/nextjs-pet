import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ChangeImagesIcon from "./_components/ChangeImagesIcon";

import { FancyImagesContext } from "src/ui/_contexts/FancyImagesContext";
import { useContext } from "react";

const Header: React.FC = () => {
  const fancyImagesContext = useContext(FancyImagesContext);
  const fancyImages = fancyImagesContext.state.fancyImages;

  return (
    <Container>
      <ImageWrapper>
        <Link href={"/"}>
          <a>
            <Image
              src={"/assets/images/logo.png"}
              alt={"main-logo"}
              quality={100}
              layout={"fill"}
              objectFit={"contain"}
              priority
            />
          </a>
        </Link>
      </ImageWrapper>
      <ChangeImagesWrapper>
        <ChangeImagesButton
          onClick={() => {
            if (fancyImages) {
              fancyImagesContext.dispatch({ type: "DISABLE_FANCY_IMAGES" });
            } else {
              fancyImagesContext.dispatch({ type: "ENABLE_FANCY_IMAGES" });
            }
          }}
        >
          <ChangeImagesIcon active={fancyImages} />
        </ChangeImagesButton>
      </ChangeImagesWrapper>
    </Container>
  );
};

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
  width: 200px;
  height: 100%;
`;

const ChangeImagesWrapper = styled.div`
  position: absolute;
  top: calc((100% - 40px) / 2);
  right: 16px;
`;

const ChangeImagesButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 9999px;
  border: none;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

export default Header;
