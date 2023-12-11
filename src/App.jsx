// import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroContent from "./components/HeroContent";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Router>
        <section className="mainSection">
          <div className="mainDiv">
            <Navbar />
            <Routes>
              <Route path="/about" Component={AboutMe} />
            </Routes>
            <Routes>
              <Route path="/" Component={HeroContent} />
            </Routes>
            <Routes>
              <Route path="/contactMe" Component={ContactMe}></Route>
            </Routes>
          </div>
        </section>
      </Router>
    </>
  );
}

export default App;
