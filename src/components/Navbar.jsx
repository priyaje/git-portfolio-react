import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import GitHub from "@material-ui/icons/GitHub";
import Mail from "@material-ui/icons/Mail";
import Menu from "@material-ui/icons/Menu";

const Container = styled.nav`
  height: 60px;
  background-color: #d2adc8;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border: 1px gray;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 2rem;
    color: #550890;
  }

  Link,
  a {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  &:hover {
    background-color: #af3de5;
  }
`;

const Logo = styled.img`
  height: 3em;
  width: 3em;
  border-radius: 50%;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
`;

const MenuContainer = styled.div`
  margin-left: 10rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  a button {
    margin-left: 20rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 2em;
    font-weight: bold;
    background-color: #bfdfcf;
    cursor: pointer;
    padding: 1em;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.div`
  margin-right: 2rem;
  cursor: pointer;
  &:hover {
    color: #7b1a84;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Link to="/logo">
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
        </Link>
      </Left>

      <Center>
        <MenuContainer>
          <Link to="/home">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
        </MenuContainer>
      </Center>

      <Right>
        <a href="/contact">
          <button>Contact Us</button>
        </a>
        <HamburgerContainer>
          <Menu />
        </HamburgerContainer>
        <IconContainer>
          <Icon>
            <GitHub />
          </Icon>
          <Icon>
            <Mail />
          </Icon>
        </IconContainer>
      </Right>
    </Container>
  );
};

export default Navbar;
