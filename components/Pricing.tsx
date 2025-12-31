
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, ShieldCheck, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const checkoutUrl = "https://pay.kirvano.com/aa3bf7a8-befc-4154-b73f-91d5c1cc6a80";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full text-orange-600 text-sm font-bold mb-8 animate-pulse"
          >
            <Flame className="w-4 h-4 fill-current" />
            OFERTA POR TEMPO LIMITADO
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Sua Nova Tela por <span className="text-purple-600 underline decoration-purple-600/30">Menos que um Café</span>
          </h2>
          
          <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-gray-200 mb-10 relative overflow-hidden group shadow-2xl shadow-gray-200/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
            
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-xl md:text-2xl text-gray-400 line-through font-medium">R$ 29,90</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase">80% OFF</span>
            </div>
            
            <div className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tighter">
              R$ 5,90
            </div>
            
            <p className="text-gray-500 mb-8 md:mb-10 text-base md:text-lg">Pagamento único. Acesso imediato.</p>

            <a 
              href={checkoutUrl}
              className="w-full bg-gray-900 text-white hover:bg-purple-600 py-5 md:py-7 rounded-2xl font-black text-lg md:text-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-gray-900/10 flex items-center justify-center gap-3 uppercase tracking-tight text-center"
            >
              quero meu pacote agora
              <Zap className="w-5 h-5 md:w-7 md:h-7 fill-current text-yellow-400" />
            </a>
            
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                <Clock className="w-4 h-4" />
                Essa oferta expira em: <span className="font-mono text-lg ml-1 font-bold">{formatTime(timeLeft)}</span>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3 h-3" />
                Compra 100% Segura • Checkout Criptografado
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm italic">⚠️ Pode sair do ar a qualquer momento sem aviso prévio.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
