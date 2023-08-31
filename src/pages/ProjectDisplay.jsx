import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../helpers/projectDescrip";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";


const Container = styled.div`
height:20rem;
width:50vw;`

const Title = styled.h2`text-align:center`;
const Description = styled.p`font-size:1.5rem;`;

const Wrapper = styled.div`padding: 1rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
height:20rem;
background-color: #06042d13;

border-radius: 1rem;
position:relative`;

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectDetails[id];

const Section = styled.body`background-image:url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80');background-size:cover;background-position:center;height:50rem`


  return (
    <Section>

    <Container>
      <Wrapper>
        <Title> {project.title} </Title>
        <Description>{project.description}</Description>
        <GitHub style={{cursor:'pointer',position:'absolute',top:'10em',left:'35em'}} />
      </Wrapper>
    </Container>
      </Section>
      
  );
};

export default ProjectDisplay;
