// components/Footer.js
import { Blocks, Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Blocks className="w-6 h-6 text-purple-500" />
            <span className="font-bold">StakeAIA</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.github.com/jishantukripal/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.x.com/jishantukripal" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2024 StakeForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
