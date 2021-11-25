import "../Styles/FeaturesCSS/features.css";
import Fade from "react-reveal/Fade";
export default function Features() {
  return (
    <Fade bottom>
      <h2 className="feature__heading">Features</h2>
      <div className="flex features">
        <div className="feature">
          <h4 className="feature__title">Download Images</h4>
          <p className="feature__text">
            Our platform lets you save your greatest art pieces
          </p>
        </div>
        <div className="feature">
          <h4 className="feature__title">Paint & Erase</h4>
          <p className="feature__text">
            Paint with any brush width and any colour your heart desires with our any colour selector.
          </p>
        </div>
        <div className="feature">
          <h4 className="feature__title">Clear Canvas</h4>
          <p className="feature__text">
            Use the "eraser" button to clean up your mistaskes or use the "clear" button to start a new master piece.
          </p>
        </div>
      </div>
    </Fade>
  );
}
