import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
const App = () => {
  return (
    <Main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
      </Routes>
    </Main>
  );
};

export default App;
