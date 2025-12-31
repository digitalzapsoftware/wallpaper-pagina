
import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { PlusCircle, LayoutGrid, Zap, Smartphone } from 'lucide-react';

const wallpapers = [
  { 
    title: 'Character: Red Eyes Dark', 
    videoUrl: 'video_0.mp4',
    poster: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '09:41'
  },
  { 
    title: 'Supercar: GT Velocity', 
    videoUrl: 'https://player.vimeo.com/external/494411130.hd.mp4?s=2377c8e9b67484d8526a0b12e08e6f3b064f208c&profile_id=175', 
    poster: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '12:30'
  },
  { 
    title: 'Futebol: Skill Motion', 
    videoUrl: 'https://player.vimeo.com/external/435163273.hd.mp4?s=97cc7a69b76426477d9f78330756788220f18828&profile_id=175',
    poster: 'https://images.pexels.com/photos/159515/football-footballer-player-sport-159515.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '21:00'
  },
  { 
    title: 'Tokyo: Neon Rain', 
    videoUrl: 'https://player.vimeo.com/external/434045526.hd.mp4?s=6a9d944c2069e233d6a455a16567302f398e0344&profile_id=175', 
    poster: 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '02:00'
  },
  { 
    title: 'Abstract: Gold Flow', 
    videoUrl: 'https://player.vimeo.com/external/403758362.hd.mp4?s=5347248384f50f7574b68f59d0426d030628e938&profile_id=174', 
    poster: 'https://images.pexels.com/photos/262333/pexels-photo-262333.jpeg?auto=compress&cs=tinysrgb&w=400',
    time: '10:15'
  },
];

const infiniteWallpapers = [...wallpapers, ...wallpapers];

// Usamos memo para evitar re-renders desnecessários do componente de vídeo
const VideoCard = memo(({ wp }: { wp: typeof wallpapers[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // margin: "200px" permite que o vídeo comece a carregar um pouco antes de aparecer
  const isInView = useInView(containerRef, { margin: "200px 0px 200px 0px" });
  const isStrictInView = useInView(containerRef, { margin: "0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isStrictInView) {
      // Reproduzir apenas se estiver visível
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      // Pausar imediatamente ao sair da tela para liberar CPU
      video.pause();
    }
  }, [isStrictInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-[260px] h-[540px] md:w-[290px] md:h-[600px] bg-[#0c0c0c] rounded-[3.5rem] p-2.5 shadow-xl border-[1px] border-white/10 select-none flex-shrink-0 overflow-hidden"
      style={{ 
        transform: 'translateZ(0)', // Força camada de GPU
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <div className="relative w-full h-full bg-black rounded-[2.8rem] overflow-hidden">
        {/* Só renderizamos a tag video se estiver perto do viewport (Lazy Loading) */}
        {isInView ? (
          <video 
            ref={videoRef}
            loop 
            muted 
            playsInline 
            preload="metadata"
            poster={wp.poster}
            className="absolute inset-0 w-full h-full object-cover saturate-[1.2] brightness-105 pointer-events-none"
          >
            <source src={wp.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={wp.poster} className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" alt="Loading..." />
        )}
        
        {/* UI do Smartphone */}
        <div className="absolute inset-0 flex flex-col items-center z-20 pointer-events-none p-5 md:p-6 pt-14 md:pt-16">
          <p className="text-[12px] md:text-[13px] font-semibold tracking-tight text-white/90 mb-0.5">Segunda, 12 Junho</p>
          <h4 className="text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
            {wp.time}
          </h4>

          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 md:w-28 h-6 md:h-7 bg-black rounded-full z-40 border border-white/10" />

          <div className="absolute bottom-10 w-full px-10 flex justify-between items-center opacity-80">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-2xl flex items-center justify-center border border-white/10">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/40 backdrop-blur-2xl flex items-center justify-center border border-white/10">
              <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 md:w-30 h-1 bg-white/40 rounded-full" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-30 opacity-60 pointer-events-none" />
      </div>
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

const Showcase: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8 md:mb-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-[9px] md:text-xs font-black uppercase mb-3 tracking-widest"
        >
          Amostra do Pack Premium
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tighter">
          Qualidade <span className="text-purple-600">Cinematográfica</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-lg font-medium opacity-70 max-w-xl mx-auto">
          Explore uma prévia real da nossa coleção exclusiva adaptada para qualquer tela.
        </p>
      </div>

      <div className="relative flex overflow-hidden py-10 select-none">
        <motion.div 
          className="flex gap-6 md:gap-10 px-4"
          initial={{ x: 0 }}
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 45, // Mais lento = menos estresse de decodificação de vídeo por segundo
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ 
            width: "max-content",
            willChange: "transform",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d" // Ajuda na renderização 3D/GPU
          }}
        >
          {infiniteWallpapers.map((wp, idx) => (
            <VideoCard key={idx} wp={wp} />
          ))}
        </motion.div>

        {/* Gradientes Laterais Otimizados */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-gray-50 to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-gray-50 to-transparent z-40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 mt-12 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-gray-100 shadow-2xl shadow-purple-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
            <LayoutGrid className="w-48 h-48 text-purple-600" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-purple-500/30">
              <PlusCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                Isso é apenas o começo...
              </h3>
              <p className="text-gray-600 text-base md:text-xl font-medium leading-relaxed">
                Você não vai receber apenas estes modelos demonstrados. Ao adquirir o pacote, você ganha acesso imediato a <span className="text-purple-600 font-bold">+200 modelos exclusivos</span> em 4K HDR.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-6">
                {['Esportes', 'Cidades', 'Carros', 'Abstrato', 'Minimalista', 'Neon'].map((tag) => (
                  <span key={tag} className="text-[10px] md:text-xs font-bold px-4 py-1.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
