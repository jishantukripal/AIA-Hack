/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Blocks, Shield, Cpu, Wallet, ArrowRight, Github, Twitter, ChevronRight, Globe, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Feature data
const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Grade Security",
    description: "Multi-signature validation and automated security auditing"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Low Gas Fee",
    description: "Extremely low transaction fee compared to other L1 chains"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Network",
    description: "Distributed validator network across multiple regions"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "99.99% uptime with instant transaction processing"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-Client Support",
    description: "Support for all major ETVM compatible clients"
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Flexible Rewards",
    description: "Dynamic reward distribution mechanisms"
  }
];

// Stats data
const stats = [
  { value: "$2.5B+", label: "Total Value Locked" },
  { value: "50,000+", label: "Active Validators" },
  { value: "99.99%", label: "Network Uptime" }
];

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A051E] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#0A051E] to-[#0A051E]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-gray-300">Live on Testnet</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                The Future of Staking in AIA Chain
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stake in AIA Chain instantly. Earn Dynamic Rewards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/stack">
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                    Start Staking
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
             <Link to="https://www.github.com/jishantukripal/" >
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors">
                    Read GitHub
                </button>
             </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl -z-10"></div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade AIA Chain</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for institutional stakers, accessible to everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;