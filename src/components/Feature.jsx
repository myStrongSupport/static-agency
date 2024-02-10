import styled from "styled-components";
import phone from "../Img/phone.png";
import AnimateShapes from "./AnimateShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 85%;
`;
const Right = styled.div`
  width: 50%;
  display: grid;
  place-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 500;
`;
const Bold = styled.span`
  font-weight: 700;
`;
const SubTitle = styled.p`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  width: 90%;
  margin-top: 30px;
  color: #777;
  font-size: 20px;
  line-height: 1.5;
`;
const Button = styled.button`
  width: 150px;
  padding: 15px;
  background: darkblue;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
`;
const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title>
          <Bold>Good</Bold> design
        </Title>
        <Title>
          <Bold>Good</Bold> Business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities , digital
          experiences , and print materials that communicate clearly , archive
          marketing goals , look fantastic
        </Desc>
        <Desc>
          We care business and guarantee you to archive marketing goals.
        </Desc>
        <Button>Learn more</Button>
      </Right>
      <AnimateShapes />
    </Container>
  );
};

export default Feature;
