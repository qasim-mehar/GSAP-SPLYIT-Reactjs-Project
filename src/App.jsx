import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import Navbar from "./components/Navbar";
import FlavorSection from "./sections/FlavorSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh"></div>
    </main>
  );
}
export default App;
