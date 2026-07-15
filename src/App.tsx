import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Results from './components/Results';
import FAQ from './components/FAQ';
import RiskReversal from './components/RiskReversal';
import Scarcity from './components/Scarcity';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainSection />
      <Solution />
      <Pricing />
      <Comparison />
      <Results />
      <FAQ />
      <RiskReversal />
      <Scarcity />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
