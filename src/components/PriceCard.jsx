import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 28%;
  -webkit-box-shadow: 0px 9px 24px -4px rgba(0, 0, 0, 0.81);
  box-shadow: 0px 9px 24px -4px rgba(0, 0, 0, 0.81);
  border-radius: 5px;
  padding: 30px 0;
  background-color: #fff;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`;
const Bold = styled.span`
  font-weight: 700;
  font-size: 60px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 30px;
  color: crimson;
  border: 1px solid crimson;
  background-color: transparent;
  outline: none;
  margin: 15px 0 50px 0;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    color: #fff;
    background-color: crimson;
  }
`;

const ButtonJoin = styled.button`
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: darkblue;
  border: 1px solid darkblue;
  outline: none;
  border-radius: 10px;
  margin: 15px 0 0px 0;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: #fff;
    color: darkblue;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 55px;
`;
const ListItem = styled.li`
  font-size: 19px;
  font-weight: 500;
  margin: 0 0 35px 0;
`;

const PriceCard = (props) => {
  return (
    <Container>
      <Title>
        $<Bold>{props.price}</Bold>/month
      </Title>
      <ButtonContainer>
        <Button>{props.plan}</Button>
      </ButtonContainer>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusice Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Primium Plugins</ListItem>
      </List>
      <ButtonContainer>
        <ButtonJoin>Join Now</ButtonJoin>
      </ButtonContainer>
    </Container>
  );
};

export default PriceCard;
