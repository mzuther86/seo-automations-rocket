
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Features } from "../components/Features";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Benefits />
      <Testimonials />
      <Features />
      <Contact />
    </div>
  );
};

export default Index;
