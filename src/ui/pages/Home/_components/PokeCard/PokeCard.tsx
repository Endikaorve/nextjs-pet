import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import { Color, ColorType } from "styles/theme/Colors";

import { Pokemon } from "src/core/Pokemon/domain/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokeCard: React.FC<Props> = ({ pokemon }) => (
  <Link href={`/details/${pokemon.name}`}>
    <a>
      <Card type={pokemon.types[0]}>
        <CardHeader>
          <CardHeaderName>{pokemon.name}</CardHeaderName>
          <CardHeaderCode>#{pokemon.id}</CardHeaderCode>
        </CardHeader>
        <CardBody>
          <CardBodyImgWrapper>
            <Image
              src={pokemon.altImg}
              alt={pokemon.id}
              layout={"fill"}
              objectFit={"contain"}
            />
          </CardBodyImgWrapper>

          <CardBodyTypes>
            {pokemon.types.map((type: any) => (
              <CardBodyTypesBadge
                key={`type_badge_${pokemon.id}_${type}`}
                type={type}
              >
                {type}
              </CardBodyTypesBadge>
            ))}
          </CardBodyTypes>
          <CardBodyAbout>About</CardBodyAbout>
          <CardBodyDetails>
            <CardBodyDetailsContent>
              <CardBodyDetailsContentData>
                {/* <CardBodyDetailsContentDataImg src={weight} alt="weight-icon" /> */}
                {pokemon.weight} kg
              </CardBodyDetailsContentData>
              <CardBodyDetailsContentTitle>Weight</CardBodyDetailsContentTitle>
            </CardBodyDetailsContent>

            <CardBodyDetailsContent>
              <CardBodyDetailsContentData>
                {/* <img
              className="poke-card-body-details-content-data-img"
              src={height}
              alt="height-icon"
            /> */}
                {pokemon.height} m
              </CardBodyDetailsContentData>
              <CardBodyDetailsContentTitle>Height</CardBodyDetailsContentTitle>
            </CardBodyDetailsContent>
          </CardBodyDetails>
          <CardBodyDescription>{pokemon.description}</CardBodyDescription>
        </CardBody>
      </Card>
    </a>
  </Link>
);

const Card = styled.div<{
  type: ColorType;
}>`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  margin: 0 12px 24px 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  background-color: ${({ type }) => Color[type]};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 0px 24px;
  color: white;
  font-weight: 700;
`;

const CardHeaderName = styled.div`
  margin-right: auto;
  font-size: 24px;
  text-transform: capitalize;
`;

const CardHeaderCode = styled.div`
  font-size: 12px;
`;

const CardBody = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
  height: calc(100% - 160px);
  /*height: 240px;*/
  background-color: white;
  border-radius: 12px;
`;

const CardBodyImgWrapper = styled.div`
  position: absolute;
  bottom: calc(100% - 49px);
  left: 50%;
  transform: translate(-50%, 0);
  height: 140px;
  width: 250px;
`;

const CardBodyTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

const CardBodyTypesBadge = styled.span<{
  type: ColorType;
}>`
  display: flex;
  align-items: center;
  height: 20px;
  margin-right: 16px;
  padding: 0 10px;
  border-radius: 100px;
  color: white;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: capitalize;

  background-color: ${({ type }) => Color[type]};

  &:last-child {
    margin-right: 0;
  }
`;

const CardBodyAbout = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;

const CardBodyDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const CardBodyDetailsContent = styled.div`
  padding: 0 24px;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`;

const CardBodyDetailsContentData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 10px;
  line-height: 16px;
`;

const CardBodyDetailsContentDataImg = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

const CardBodyDetailsContentTitle = styled.div`
  text-align: center;
  font-size: 8px;
  line-height: 12px;
  color: #666666;
`;

const CardBodyDescription = styled.div`
  height: 48px;
  overflow: hidden;
  padding: 0 20px;
  text-align: justify;
  font-size: 10px;
  line-height: 16px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default PokeCard;
