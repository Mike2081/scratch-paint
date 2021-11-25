import React from "react";
import "../Styles/TeamCSS/Team.css";

import abi from "../Images/team/abi.png";
import mike from "../Images/team/mike.png";
import ted from "../Images/team/ted.png";

import github from "../Images/socials/github.svg";
import linkedin from "../Images/socials/linkedin.svg";
import website from "../Images/socials/website.svg";
import email from "../Images/socials/email.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";

function Team() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="grid">
          <img className="image" src={mike} alt="mike" />
          <div className="name">
            <h2>Michael DoHo</h2>
            <p>Full Stack Developer</p>
          </div>
          <div className="info">
            <p>
              Always looking for ways to improve my code. Love to look at code
              and helping others with their problems, as opportunity to solve a
              puzzle. Love to bring peoples ideas to life with programming,
              let’s talk!
            </p>
            <p>
              "If you want to go fast, go alone; but if you want to go far, go
              together."
            </p>
            <div className="socials flex">
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/michaeldoho/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin icon" />
                </a>
                <a
                  href="https://github.com/Mike2081"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github icon" />
                </a>
                <a
                  href="mailto:michaeldoho@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={email} alt="email icon" />
                </a>

                <a
                  href="mailto:michaeldoho@hotmail.com"
                  classname="email_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  michaeldoho@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <img className="image" src={ted} alt="brad pitt" />
          <div className="name">
            <h2>Ted Dino</h2>
            <p>Front End Developer</p>
          </div>
          <div className="info">
            <p>
              Hi! I'm Ted, a Front End Developer. I love writing code because it
              helps me improve my logical and analytical skills. I am a person
              who loves to solve puzzles, constantly questioning to solve
              problems. When I am not coding, I spend my time mostly watching
              movies, playing video games or just surfing the net. For more
              information about me, please visit one of my socials. See you!
            </p>
            <div className="socials flex">
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/ted-dino-967305222"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin icon" />
                </a>
                <a
                  href="https://github.com/ted-dino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github icon" />
                </a>
                <a
                  href="mailto:ted23@tutanota.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={email} alt="email icon" />
                </a>

                <a
                  href="mailto:ted23@tutanota.com"
                  classname="email_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  ted23@tutanota.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <img className="image" src={abi} alt="abi" />
          <div className="name">
            <h2>Abigail Schoeder-Rummel</h2>
            <p>UX/UI Designer</p>
          </div>
          <div className="info">
            <p>
              As someone who has seen the impact or sometimes lack there of user
              experiences for people with disabilities, I have tailored my work
              and professional focus ensuring well rounded designs with everyone
              in mind.
            </p>
            <div className="socials flex">
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/abigail-sr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin icon" />
                </a>
                <a
                  href="https://designsasr.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={website} alt="computer icon" />
                </a>
                <a href="mailto:designs.asr@gmail.com" rel="noreferrer">
                  <img src={email} alt="email icon" />
                </a>

                <a
                  href="mailto:designs.asr@gmail.com"
                  classname="email_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  designs.asr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
