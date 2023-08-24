import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
const App = () => {
  return (
    <Main basename="/New_Portfolio">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Main>
  );
};

export default App;
