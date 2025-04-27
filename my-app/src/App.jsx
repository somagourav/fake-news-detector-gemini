import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import URLInput from './components/URLInput';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <URLInput />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;