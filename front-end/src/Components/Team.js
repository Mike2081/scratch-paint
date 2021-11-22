import React from "react";
import "../Styles/TeamCSS/Team.css";

import abi from "../Images/team/abi.png";
import mike from "../Images/team/mike.png";
import ted from "../Images/team/ted.png";

import email from "../Images/socials/email.svg";
import github from "../Images/socials/github.svg";
import linkedin from "../Images/socials/linkedin.svg";
import website from "../Images/socials/website.svg";

function Team() {
  return (
    <div className="container teams">
      <h2>Team</h2>
      <div className="team flex">
        <img src={mike} alt="" />
        <div>
          <h2>Michael DoHo</h2>
          <small>Full Stack Developer</small>
          <p>
            Super short description of you that can sort of fill this entire box
            but do not need to fill it all Powder jelly beans cake apple pie
            soufflé. Cake lemon drops muffin macaroon sweet candy. Pie cookie
            biscuit marzipan lollipop chocolate cake bear claw liquorice.Pie
            cookie biscuit marzipan lollipop chocolate cake bear claw liquorice.
          </p>
          <div className="socials flex">
            <a href="/">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="/">
              <img src={github} alt="github icon" />
            </a>
            <a href="/">
              <img src={email} alt="email icon" />
            </a>
            <p>michaeldoho@hotmail.com</p>
          </div>
        </div>
      </div>

      <div className="team flex">
        <img src={ted} alt="" />
        <div>
          <h2>Ted Dino</h2>
          <small>Front End Developer</small>
          <p>
            Super short description of you that can sort of fill this entire box
            but do not need to fill it all Powder jelly beans cake apple pie
            soufflé. Cake lemon drops muffin macaroon sweet candy. Pie cookie
            biscuit marzipan lollipop chocolate cake bear claw liquorice.Pie
            cookie biscuit marzipan lollipop chocolate cake bear claw liquorice.
          </p>
          <div className="socials flex">
            <a href="/">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="/">
              <img src={github} alt="github icon" />
            </a>
            <a href="/">
              <img src={email} alt="email icon" />
            </a>
            <p>ted23@tutanota.com</p>
          </div>
        </div>
      </div>

      <div className="team flex">
        <img src={abi} alt="" />
        <div>
          <h2>Abigail Schoeder-Rummel</h2>
          <small>UX/UI Designer</small>
          <p>
            Super short description of you that can sort of fill this entire box
            but do not need to fill it all Powder jelly beans cake apple pie
            soufflé. Cake lemon drops muffin macaroon sweet candy. Pie cookie
            biscuit marzipan lollipop chocolate cake bear claw liquorice.Pie
            cookie biscuit marzipan lollipop chocolate cake bear claw liquorice.
          </p>
          <div className="socials flex">
            <a href="/">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="/">
              <img src={website} alt="computer icon" />
            </a>
            <a href="/">
              <img src={email} alt="email icon" />
            </a>
            <p>designs.asr@gmail.com</p>
            <p>designsasr.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
