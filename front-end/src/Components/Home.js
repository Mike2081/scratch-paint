import React from "react";
import "../Styles/HomeCSS/hero_section.css";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import demoVideo from "../Images/demo.mov";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex main">
          <div className="main__description">
            <h1 className="main__title">See what hides below</h1>
            <p className="main__subtitle">
              Ever experience the fun in discovering colors as you draw? Our app
              lets you experience all the colours with our any colour picker!
            </p>
            <a href="/paint" className="main__button">
              Try it!
            </a>
          </div>
          {/* <img src={hero_logo} alt="app" className="main__img"></img> */}
          <video className="main__video" controls>
            <source src={demoVideo} type="video/ogg" />
          </video>
        </div>
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
