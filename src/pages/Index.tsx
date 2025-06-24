
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Benefits } from "../components/Benefits";
import { Features } from "../components/Features";
import { Timeline } from "../components/Timeline";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Introduction />
      <Benefits />
      <Features />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Index;
