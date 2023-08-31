import React from "react";
import styled from "styled-components";
import logo from "../assets/logo3.png";
import  GitHub  from "@material-ui/icons/GitHub";
import  Mail  from "@material-ui/icons/Mail";
import  LinkedIn from "@material-ui/icons/LinkedIn";

const Container = styled.div`
height:50rem;
  display: flex;
  padding: 1em 0;
  
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  width:50%;
  background-color: #06042d13;
 
`;

const Form = styled.form`
padding:1em 1em;

  legend {
    font-weight: bold;
  }
  label {
    font-weight: bold;
  }
  input {
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  padding: 1em 0;
  button {
    margin-right: 1em;
    background-color: #c9a2a2;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;

const NameContainer = styled.div`
  padding: 1em 0;
`;

const MessageContainer = styled.div`
  padding: 1em 0;
`;

const ContactContainer = styled.div`
  display: flex;
  background-color: #9d94c7;
  width: 100vw;
  height:100%;
`;

const LogoContainer = styled.div`
  display: flex;
  position: relative;
`;
const Logo = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: absolute;
  top: 15em;
  left: 20em;
  margin-left: 20em;
`;

const IconContainer = styled.div`display:flex;justify-content: center;  position: relative; top:40rem;right:20rem; `;

const Icon = styled.div`margin-left:1rem; cursor:pointer; 

&:hover{color:lightpink;}`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Form type="submit">
          <fieldset>
            <legend>Send Us A Message</legend>
            <NameContainer>
              <p>
                <label for="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  required
                />
              </p>
            </NameContainer>

            <p>
              <label for="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your email"
                required
              />
            </p>

            <MessageContainer>
              <p>
                <label for="message">Your Message:</label>
                <br />
                <br />
                <textarea
                  name="message"
                  id="message"
                  cols="80"
                  rows="30"
                  placeholder="Type your message here"
                ></textarea>
              </p>
            </MessageContainer>
          </fieldset>
          <ButtonContainer>
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
          </ButtonContainer>
        </Form>

        <IconContainer>
           
          <Icon>
            <GitHub />

          </Icon>
        
          <Icon>
            <Mail />
          </Icon>
          <Icon>
            <LinkedIn />
          </Icon>
        </IconContainer>
      </Wrapper>
      <ContactContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
