import React from "react";
import styled from "styled-components";
import logo from "../assets/logo3.png";


const Container = styled.div`
  padding: 1rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: aliceblue;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const BackgroundImage = styled.img``;

const About = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #9d94c7;


  p {
    font-weight: normal;
    font-size: 1.5em;
    padding: 2em 2em;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  position:relative;`


const Logo = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position:absolute;
  bottom:10rem;
  left:15rem;

  &:hover{
    cursor:pointer;
    background-color:#b11be3ff;
  }
`;

const Home = () => {
  return (
    
      <Container>
        <ImageContainer>
          <BackgroundImage src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" />
          <About>
          
        
<LogoContainer>
<Logo src={logo}/>
</LogoContainer>



            <p>
              <i>
                Goal-Oriented passionate web developer who loves challenges and
                learn something new and utilized maternity leave to learn more
                about web development. Organized to develop custom-crafted,
                customer-focused websites and designs.{" "}
              </i>
            </p>
          </About>
        </ImageContainer>
      </Container>

 

  );
};

export default Home;
