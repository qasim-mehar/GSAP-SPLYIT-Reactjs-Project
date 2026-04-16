import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
    </main>
  );
}
export default App;
