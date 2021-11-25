import React from "react";
import "../Styles/TeamCSS/Team.css";

import abi from "../Images/team/abi.png";
import mike from "../Images/team/mike.png";
import ted from "../Images/team/ted.png";

import github from "../Images/socials/github.svg";
import linkedin from "../Images/socials/linkedin.svg";
import website from "../Images/socials/website.svg";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

function Team() {
  return (
    <Fade bottom>
      <Navbar/>  
      <div className="container">
        <div className="grid">
          <img className="image" src={mike} alt="mike" />
          <div className="name">
            <h2>Michael DoHo</h2>
            <p>Full Stack Developer</p>
          </div>
          <div className="info">
            <p>
              Always looking for ways to improve my code. Love to look at code and
              helping others with their problems, as opportunity to solve a
              puzzle. Love to bring peoples ideas to life with programming, let’s
              talk!
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
            <p>WHAAAAT AAARREE YOOUUU DOOOING IN MY SWAAAMPPP???!!!</p>
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
  </Fade>  
  );
}

export default Team;
