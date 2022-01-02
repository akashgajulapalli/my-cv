import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Profile from "./profile/profile";
import About from "./about/about";
import Skills from "./skills/skills";
import Education from "./education/education";
import Experience from "./experience/experience";
import Portfolio from "./portfolio/portfolio";

const Home = () => {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m3">
            <Profile />
          </div>
          <div className="col s12 m9">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
