import { AboutUs } from "./components/AboutUs";
import FAQSection from "./components/FAQSection";
import { Home } from "./components/Home";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className='max-w-7xl mx-auto space-y-4'>
      <Home />
      <AboutUs />
      <Services />
      <FAQSection />
    </div>
  );
}
