import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Texture from "./components/Texture";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Contact from "./pages/Contact";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`height:100vh;width:100%;`;
const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/logo" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/project/:id" element={<ProjectDisplay />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Texture />

        <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

        <Footer />
      </Router>
    </Container>
  );
};

export default App;
