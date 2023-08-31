import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 0 3rem;

  grid-item-1 button {
    color: black;
  }
`;

const ImageWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #8338ec14;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border-radius: 5px;
    background-color: #b862d0;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      color: #540c3e;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2``;

const Tools = styled.p`
  display: flex;
  align-items: center;
`;

export const projectItems = [
  {
    image: project1,
    title: "Modal Wrapper",
    toolsUsed: "React.js,React hooks,CSS",
  },
  {
    image: project2,
    title: "Travel Design Website",
    toolsUsed: "Rect hooks, styled components,React Icons, CSS",
  },
  {
    image: project3,
    title: "Toy Shop Design",
    toolsUsed:
      "React.js, React hooks, styled components, CSS,Material UI Icons",
  },
  {
    image: project4,
    title: "Home Depot E-commerce Website",
    toolsUsed: "React.js, React hooks, CSS",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <ImageContainer>
      {projectItems.map((items, idx,id) => {
        return (
          <ImageWrapper>
            {(id = idx)}

            <Image src={items.image} />
            <Title> {items.title}</Title>
            <Tools>{items.toolsUsed}</Tools>
            <ButtonContainer
              onClick={() => {
                navigate("/project/" + id);
              }}
            >
              <span>
                <button>More Details</button>
              </span>
            </ButtonContainer>
          </ImageWrapper>
        );
      })}
    </ImageContainer>
  );
};

export default Projects;
