/* eslint-disable react/prop-types */
// components/Navbar.js
import { Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar({ scrolled }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A051E]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Blocks className="w-8 h-8 text-purple-500" />
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"><span >StakeAIA</span></Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm hover:text-purple-400 transition-colors">Home</a>
            <a href="#features" className="text-sm hover:text-purple-400 transition-colors">Features</a>
            <a href="#stats" className="text-sm hover:text-purple-400 transition-colors">Stats</a>
            <Link to="/stake" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
