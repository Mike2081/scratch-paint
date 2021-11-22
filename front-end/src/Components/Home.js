import React from "react";
import hero_logo from "../Images/hero-img.png";
import "../Styles/HomeCSS/hero_section.css";
import Features from "./Features";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="container">
        <div className="flex main">
          <div className="main__description">
            <h1 className="main__title">See what hides below</h1>
            <p className="main__subtitle">
              Ever experience the fun in discovering colors as you draw? Our app
              lets you experience it with your peers. We make sure the colors
              and patterns are random to give each experience a new, fun look!
            </p>
            <a href="/paint" className="main__button">
              Try it!
            </a>
          </div>
          <img src={hero_logo} alt="app" className="main__img" />
        </div>
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default Home;
