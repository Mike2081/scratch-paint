import "../Styles/FeaturesCSS/features.css";
export default function Features() {
  return (
    <div>
      <h2 className="feature__heading">Features</h2>
      <div className="flex features">
        <div className="feature">
          <h4 className="feature__title">Multiple Users</h4>
          <p className="feature__text">
            Our platform lets you share and draw with other people
          </p>
        </div>
        <div className="feature">
          <h4 className="feature__title">Paint & Erase</h4>
          <p className="feature__text">
            As you paint across the platform, you’ll notice color patterns start
            to emerge.
          </p>
        </div>
        <div className="feature">
          <h4 className="feature__title">Scratch Art</h4>
          <p className="feature__text">
            Based on popular scratch art, you cut away the black to see the
            exciting colors hidden blow.
          </p>
        </div>
      </div>
    </div>
  );
}
