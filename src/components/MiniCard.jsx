import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Container = styled.div`
  margin: 15px;
  padding: 15px;
  box-shadow: -1px 7px 19px -5px #000000;
  border-radius: 10px;
  text-align: center;
`;
const Text = styled.p`
  margin-top: 20px;
`;

const MiniCard = () => {
  return (
    <Container>
      <BsSearch color="#541743" size={30} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Container>
  );
};

export default MiniCard;
