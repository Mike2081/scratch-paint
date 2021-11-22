import "../Styles/AppCSS/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Holder from "./Holder";
import Home from "./Home";
import Team from "./Team";
import Features from "./Features";
import Footer from "./Footer";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

function App() {
  return (
    <div>
      <Router>
        <Flip top>
          <Navbar />
        </Flip>
        <Fade bottom>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/paint" element={<Holder />} />
          </Routes>
          {/* <Features /> */}
          {/* <Footer /> */}
        </Fade>
      </Router>
    </div>
  );
}

export default App;
