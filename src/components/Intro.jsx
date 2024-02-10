import React from "react";
import styled from "styled-components";
import me from "../Img/me.png";
import AnimateShapes from "./AnimateShapes";

const Header = styled.header`
  height: calc(100vh - 50px);
  display: flex;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  outline: none;
  border: 1px solid darkblue;
  border-radius: 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: grey;
  margin-right: 5px;
`;

const Right = styled.div`
  width: 40%;
  overflow: hidden;
  background-attachment: red;
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Header>
      <Left>
        <Title>Adventure In Creative Age</Title>
        <Desc>
          We believe that designing products and services in close partenership
          with our clients is only way to have a real impact on their buessniess
        </Desc>
        <Info>
          <Button>Start A project</Button>
          <Contact>
            <Phone>+98 936 5051 630</Phone>
            <ContactText>For Any Question and Concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={me} />
      </Right>
      <AnimateShapes />
    </Header>
  );
};

export default Intro;
