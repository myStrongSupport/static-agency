import React, { useState } from "react";
import styled from "styled-components";
import how from "../Img/how.png";
import MiniCard from "./MiniCard";
import { AiOutlinePlayCircle } from "react-icons/ai";
import miniVideo from "../video/wory.mp4";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  margin-left: 100px;
  width: 63%;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  /* width: 70%; */
  height: 300px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 0px 9px 24px -4px rgba(0, 0, 0, 0.81);
`;

const Title = styled.h1``;
const Desc = styled.p`
  color: #555;
  font-size: 20px;
  margin-top: 20px;
  line-height: 1.5;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`;

const DivButton = styled.div``;
const SpanText = styled.span`
  margin-left: 10px;
`;

const Button = styled.button`
  border: none;
  background: darkblue;
  padding: 15px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image open={open} src={how} />
        <Video open={open} autoPlay loop controls src={miniVideo} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We Provide digital experience services ro startups and small
            business to looking for partners of their digital media. design and
            development , lead generation and communications requirents , We
            work with you not for you, Althogh we had a great resoures
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <DivButton>
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              <AiOutlinePlayCircle />
              <SpanText> How is it works</SpanText>
            </Button>
          </DivButton>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Services;
