
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap
} from 'lucide-react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/20 text-gray-900">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full" />
      </div>

      {/* Header / Nav */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">PREMIUM <span className="text-purple-600">PACK</span></span>
          </div>
          <button className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Quero Meu Pacote
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <Showcase />
        <TargetAudience />
        <Pricing />
      </main>

      <Footer />

      {/* Floating Sticky CTA for Mobile */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-0 w-full px-6 z-40 md:hidden"
          >
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-purple-500/40 flex items-center justify-center gap-2 active:scale-95 transition-all">
              <Zap className="w-5 h-5 fill-current" />
              QUERO POR APENAS R$5,90
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
