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

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/paint" element={<Holder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
