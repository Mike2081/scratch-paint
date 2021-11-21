import "../Styles/FooterCSS/footer.css";
import bee from "../Images/bee.svg";
import github from "../Images/socials/github.svg";
import figma from "../Images/socials/figma.svg";
export default function Footer() {
  return (
    <div className="bottom">
      <img src={bee} alt="bee" />
      <hr />

      <footer className="container flex">
        <p>© "name" Development. All rights reserved.</p>
        <a
          href="https://github.com/Mike2081/shareable-whiteboard"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="" />
        </a>
        <a
          href="https://www.figma.com/file/2addoOozsjdlIPIuFgsrst/Hackathon?node-id=0%3A1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={figma} alt="" />
        </a>
      </footer>
    </div>
  );
}
