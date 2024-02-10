import React from "react";
import styled from "styled-components";
import bg from "../Img/background.jpg";
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 50px;
`;
const Break = styled.span`
  display: block;
`;
const FormLeft = styled.form`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const FormContainer = styled.div``;
const Input = styled.input`
  display: block;
  font-size: 18px;
  width: 290px;
  margin-bottom: 25px;
  padding: 15px;
`;
const Textarea = styled.textarea`
  display: block;
`;
const Right = styled.div`
  width: 50%;
`;

const Form = () => {
  return (
    <Container>
      <Left>
        <LeftContainer>
          <Title>
            Questions?
            <Break>Let's Get In Touch</Break>
          </Title>
          <FormLeft>
            <FormContainer>
              <Input placeholder="Your Name " />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </FormContainer>
            <FormContainer>
              <Textarea cols="45" rows="12" />
              <button>Send</button>
            </FormContainer>
          </FormLeft>
        </LeftContainer>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Form;
