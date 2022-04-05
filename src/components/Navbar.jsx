import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Link to="/Home" style={linkStyle}>
            <Logo>ViOVin.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/" style={linkStyle}>
            <MenuItem>Våra Viner</MenuItem>
          </Link>
          <Link to="/" style={linkStyle}>
            <MenuItem>Om Oss</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
