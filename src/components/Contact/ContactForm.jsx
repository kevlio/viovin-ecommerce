import React from "react";
import styled from "styled-components";
import { ImgContainer } from "../Slider/Slider.styles";


const Container = styled.div`
  height: 100%;
  padding: 10% 5% 10% 5%;
  display: flex;
  justify-content: center;
  background-image: url("https://github.com/congreves/viovin-ecommerce/blob/main/src/assets/Benezet%20(22).jpg");
  
`;
const ImageContainer = styled.img`

`

const Form = styled.form`
  width: 30%;
  padding: 3em 2em 3em 2em;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.25);
 
`;
const Title = styled.h2`
  display: block;
  padding: 1em 1em;
  font-weight: 200;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 1em 1em;
`;
const Label = styled.label`
  flex: 1;
  padding: 1em 1em;
`;

const Input = styled.input`
  border-style: none;
  width: 100%;
  padding: 1em 1em;
  height: 100%;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em 1em;
`;

function ContactForm() {
  return (
    <div>
      <Container>
        <ImgContainer src="https://github.com/congreves/viovin-ecommerce/blob/main/src/assets/Benezet%20(22).jpg"></ImgContainer>
        <Form>
          <Title>KONTAKTA OSS</Title>
          <ContactInfo>
            <Label>Namn</Label>
            <Input
              placeholder="Skriv ditt namn.."
              name="förnamn"
              type="text"
            ></Input>
            <Label>Email</Label>
            <Input
              placeholder="Skriv in email"
              email="emailadress"
              type="text"
            ></Input>
            <Label>Företag /Privatperson</Label>
            <Input
              placeholder="Skriv in företag/privatperson"
              type="text"
            ></Input>
          </ContactInfo>
          <Message>
            <Label>Meddelande</Label>
            <Input placeholder="Lämna ett meddelande här.." type="text"></Input>
          </Message>
        </Form>
      </Container>
    </div>
  );
}

export default ContactForm;
