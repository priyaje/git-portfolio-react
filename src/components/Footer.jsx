import React from "react";
import styled from "styled-components";
import Instagram from "@material-ui/icons/Instagram";
import Mail from "@material-ui/icons/Mail";
import LinkedIn from "@material-ui/icons/LinkedIn";

const FooterContainer = styled.footer`
  margin-top: auto;
  width: 100%;
  height: 100px;
  background-color: #d2adc8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;

  p {
    color: #550890;
    font-weight: bold;
    padding: 1em 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-left: 20px;

  &:hover {
    color: #e716e0;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <Icon>
          <Instagram />
        </Icon>
        <Icon>
          <Mail />
        </Icon>
        <Icon>
          <LinkedIn />
        </Icon>
      </IconContainer>

      <p> All copyrights reserved &copy; 2023 </p>
    </FooterContainer>
  );
};

export default Footer;
