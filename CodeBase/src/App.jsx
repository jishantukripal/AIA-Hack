// App.js
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import StakePage from './pages/StakingApp';
import LandingPage from './pages/LandingPage';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A051E] overflow-x-hidden">
        <Navbar scrolled={scrolled} />

        <Routes>
          <Route path="/" element={
            <>
              <LandingPage className="text-white "/>
            </>
          } />
          <Route path="/stake" element={<StakePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
