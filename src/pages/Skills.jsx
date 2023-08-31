import React from "react";
import styled from "styled-components";

import Image1 from "../assets/front.png";
import Image2 from "../assets/back.png";

const Container = styled.div` display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;
padding: 3rem 3rem;`;

const SkillContainer= styled.div`padding: 1rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
background-color: #8338ec14;
border-radius: 1rem;
transition: 0.3s ease-in-out;
&:hover {
  transform: translateX(0.4rem) translateY(-1rem);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}`;

const Title= styled.h1``;
const SubTitle= styled.h3``;
const Image= styled.img`height:15rem;width:15rem;`;




const Skills = () => {
  const data = [
    {
      image: Image1,
      title: "Front-end",
      subTitle: "Hands on - HTML,CSS,JS,Bootstrap,TailWind,React.js",
    },
    {
      image: Image2,
      title: "Back-end",
      subTitle:
        "Knowledge about - SQL,NoSQL,MongoDB,Mongoose,Node.js,Firebase,Git,Github",
    },
  ];

  return (
    <Container>
      {data.map((skill) => {
        return (
          <SkillContainer>
            <Image src={skill.image} />
            <Title>{skill.title}</Title>
            <SubTitle>{skill.subTitle}</SubTitle>
          </SkillContainer>
        );
      })}
    </Container>
  );
};

export default Skills;
