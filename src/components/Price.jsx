import React from "react";
import PriceCard from "./PriceCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const PriceContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Price = () => {
  return (
    <Container>
      <PriceContainer>
        <PriceCard price="10" plan="Basic Plan" />
        <PriceCard price="20" plan="Premium Plan" />
        <PriceCard price="30" plan="Advanced Plan" />
      </PriceContainer>
    </Container>
  );
};

export default Price;
