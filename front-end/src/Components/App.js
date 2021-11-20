import "../Styles/App/App.css";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Features from "./Features";
import Holder from "./Holder";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Holder />
    </div>
  );
}

export default App;
