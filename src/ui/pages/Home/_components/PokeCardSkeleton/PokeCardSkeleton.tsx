import styled from "styled-components";

const PokeCard: React.FC = () => (
  <Card>
    <CardHeader>
      <CardHeaderName />
      <CardHeaderCode />
    </CardHeader>
    <CardBody>
      <CardBodyTypes>
        {Array.from(Array(2).keys()).map((type: any, index: number) => (
          <CardBodyTypesBadge key={`skeleton_badge_${index}`} />
        ))}
      </CardBodyTypes>
      <CardBodyAbout />
      <CardBodyDetails>
        <CardBodyDetailsContent />
        <CardBodyDetailsContent />
      </CardBodyDetails>
      <CardBodyDescription />
    </CardBody>
  </Card>
);

const Card = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  margin: 0 12px 24px 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #cccccc;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 0px 24px;
  font-weight: 700;
`;

const CardHeaderName = styled.div`
  height: 24px;
  width: 50%;
  margin-right: auto;
  border-radius: 12px;
  background-color: white;
`;

const CardHeaderCode = styled.div`
  height: 12px;
  width: 25%;
  border-radius: 12px;
  background-color: white;
`;

const CardBody = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
  height: calc(100% - 160px);
  background-color: white;
  border-radius: 12px;
`;

const CardBodyTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
`;

const CardBodyTypesBadge = styled.span`
  display: flex;
  align-items: center;
  height: 20px;
  width: 50px;
  margin-right: 16px;
  padding: 0 10px;
  border-radius: 100px;
  background-color: #cccccc;

  &:last-child {
    margin-right: 0;
  }
`;

const CardBodyAbout = styled.div`
  height: 16px;
  background-color: transparent;
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
  gap: 24px;
`;

const CardBodyDetailsContent = styled.div`
  height: 38px;
  width: 42px;

  background-color: #cccccc;
  border-radius: 12px;

  &:last-child {
    border-right: none;
  }
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
  background-color: #cccccc;
  border-radius: 12px;
  width: 90%;
  margin: 0 auto;
`;

export default PokeCard;
