import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 100%;
padding: 10% 5% 10% 5%;
background-color: transparent;




`;
const Wrapper = styled.div`
display:flex;
justify-content: center;

`
;

const ImageContainer = styled.img`
height: 550px;
width: 550px;
border-radius: 50%;
opacity: 0.9;


`
;

const Form = styled.form`
width: 30%;
padding: 3em 2em 3em 2em;
border-radius: 1em;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.01 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );





`;
const Title = styled.h2`
display: block;
padding: 1em 1em;
font-weight: 200;

`
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
padding: 1em 1em;
`
const Label = styled.label`
flex: 1;
padding: 1em 1em;

`;

const Input = styled.input `
border-style: none;
width: 100%;
padding: 1em 1em;
height: 100%;
`
const Message = styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding: 1em 1em;
`



function ContactForm() {
  return (
    <div>
        
        <Container>
            <Wrapper>
<ImageContainer src="https://i.ibb.co/gZYX7Gb/jonathan-farber-Tht21-XTk-QE-unsplash.jpg">

</ImageContainer>
            
        <Form>
            <Title>KONTAKTA OSS</Title>
            <ContactInfo>
            <Label >Namn</Label>
            <Input placeholder='Skriv ditt namn..' name="förnamn" type='text'></Input>
            <Label>Email</Label>
            <Input placeholder='Skriv in email' email="emailadress" type='text'></Input>
            <Label>Företag /Privatperson</Label>
            <Input placeholder='Skriv in företag/privatperson' type='text'></Input>
            </ContactInfo>
            <Message>
            <Label>Meeddelande</Label>
            <Input placeholder='Lämna ett meddelande här..' type='text'></Input>
            </Message>
        </Form>
        </Wrapper>
        </Container>

    </div>
  )
}

export default ContactForm