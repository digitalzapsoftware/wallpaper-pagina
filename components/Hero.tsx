
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, Zap, Play, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const checkoutUrl = "https://pay.kirvano.com/aa3bf7a8-befc-4154-b73f-91d5c1cc6a80";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented or video error:", error);
      });
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Glow de fundo para destacar o celular */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg shadow-purple-500/20 uppercase tracking-widest">
              <Star className="w-3 h-3 fill-current" />
              CONTEÚDO EXCLUSIVO 4K
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-gray-900 tracking-tighter">
              Sua Tela em <span className="text-purple-600">Movimento</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
              Esqueça imagens paradas. Transforme seu celular em uma peça de luxo com os <span className="text-gray-900 font-bold underline decoration-purple-500 underline-offset-4">Wallpapers Animados</span> mais cobiçados do mundo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a 
                href={checkoutUrl}
                className="group relative w-full sm:w-auto px-6 md:px-10 py-5 md:py-6 bg-gray-900 rounded-2xl font-black text-lg md:text-xl overflow-hidden transition-all hover:bg-purple-600 hover:scale-105 active:scale-95 shadow-2xl shadow-gray-900/20 text-white text-center flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 uppercase">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current text-yellow-400" />
                  Liberar Acesso Agora
                </span>
              </a>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2">
                   <span className="text-3xl font-black text-gray-900">R$ 5,90</span>
                   <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded uppercase">Ativado</span>
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Acesso Vitalício</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Seguro e Otimizado
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <Play className="w-4 h-4 text-purple-600" />
                Preview em Tempo Real
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative flex justify-center"
          >
            {/* Mockup de Telefone Premium com brilho externo avermelhado */}
            <div className="relative w-[300px] h-[620px] md:w-[340px] md:h-[700px] bg-[#0c0c0c] rounded-[4rem] p-3 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5),0_0_40px_rgba(239,68,68,0.15)] border-[1px] border-white/10 animate-float overflow-hidden">
              <div className="relative w-full h-full bg-black rounded-[3.2rem] overflow-hidden">
                
                {/* VÍDEO DO USUÁRIO - Hoodie Red Eyes */}
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover scale-[1.02] saturate-[1.2] brightness-105"
                  onCanPlay={(e) => e.currentTarget.play()}
                >
                  <source src="video_0.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>

                {/* Camada de Vidro e Reflexo Realista */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30 opacity-60" />

                {/* UI de Lock Screen - Posicionamento de iPhone Real */}
                <div className="absolute inset-0 flex flex-col items-center z-20 pointer-events-none select-none pt-16">
                  <p className="text-[14px] font-semibold tracking-tight text-white/90 drop-shadow-md mb-0.5">Segunda, 12 Junho</p>
                  <h3 className="text-8xl font-bold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">09:41</h3>
                  
                  {/* Footer buttons like iPhone */}
                  <div className="absolute bottom-12 w-full px-12 flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-2xl flex items-center justify-center border border-white/10 shadow-xl">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-2xl flex items-center justify-center border border-white/10 shadow-xl">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Home Bar indicator */}
                  <div className="absolute bottom-2 w-32 h-1 bg-white/40 rounded-full" />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-40 border border-white/10" />
              </div>
            </div>

            {/* Efeitos de Luz no Fundo */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-[120px]" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
