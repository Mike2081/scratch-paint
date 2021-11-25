import "../Styles/FooterCSS/footer.css";
import github from "../Images/socials/github.svg";
import figma from "../Images/socials/figma.svg";
export default function Footer() {
  return (
    <div className="bottom">
      <hr />
      <footer className="flex">
        <p>© Paint Scratch Development. All rights reserved.</p>
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
