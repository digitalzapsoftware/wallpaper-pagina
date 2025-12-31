
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Battery, ShieldCheck, Star, Smartphone } from 'lucide-react';

const wallpapers = [
  { 
    title: 'Character: Red Eyes Dark', 
    videoUrl: 'video_0.mp4',
    poster: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'DARK PREMIUM 4K',
    time: '00:00'
  },
  { 
    title: 'Supercar: GT Velocity', 
    videoUrl: 'https://player.vimeo.com/external/494411130.hd.mp4?s=2377c8e9b67484d8526a0b12e08e6f3b064f208c&profile_id=175', 
    poster: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'CARROS EXÓTICOS',
    time: '23:15'
  },
  { 
    title: 'Futebol: Skill Motion', 
    videoUrl: 'https://player.vimeo.com/external/435163273.hd.mp4?s=97cc7a69b76426477d9f78330756788220f18828&profile_id=175',
    poster: 'https://images.pexels.com/photos/159515/football-footballer-player-sport-159515.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'FUTEBOL 4K',
    time: '21:00'
  },
  { 
    title: 'Tokyo: Neon Rain', 
    videoUrl: 'https://player.vimeo.com/external/434045526.hd.mp4?s=6a9d944c2069e233d6a455a16567302f398e0344&profile_id=175', 
    poster: 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'CYBERPUNK',
    time: '02:00'
  },
  { 
    title: 'Abstract: Gold Flow', 
    videoUrl: 'https://player.vimeo.com/external/403758362.hd.mp4?s=5347248384f50f7574b68f59d0426d030628e938&profile_id=174', 
    poster: 'https://images.pexels.com/photos/262333/pexels-photo-262333.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'ESTÉTICA LUXO',
    time: '09:41'
  },
];

const infiniteWallpapers = [...wallpapers, ...wallpapers, ...wallpapers];

const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-300px * ${wallpapers.length} - 2rem * ${wallpapers.length})); }
          }
          @media (min-width: 768px) {
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-360px * ${wallpapers.length} - 2rem * ${wallpapers.length})); }
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-black uppercase tracking-tighter mb-4"
        >
          O Melhor Acervo do Brasil
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 tracking-tighter">
          Qualidade que <span className="text-purple-600">Impressiona</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
          Arraste e veja como cada tema se comporta. Vídeos em alta taxa de frames otimizados para sua bateria.
        </p>
      </div>

      <div className="relative flex items-center">
        <div className="flex gap-8 animate-scroll px-8">
          {infiniteWallpapers.map((wp, idx) => (
            <div
              key={idx}
              className="relative min-w-[300px] md:min-w-[360px] aspect-[9/19] rounded-[3.5rem] overflow-hidden group border-[8px] border-white shadow-2xl bg-black transition-transform duration-500 hover:scale-[1.03] cursor-pointer"
            >
              {/* VIDEO WALLPAPER */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                poster={wp.poster}
                className="w-full h-full object-cover saturate-[1.3] contrast-[1.1]"
                onCanPlay={(e) => e.currentTarget.play()}
              >
                <source src={wp.videoUrl} type="video/mp4" />
              </video>
              
              {/* Overlay UI de Lock Screen - Posicionamento iPhone */}
              <div className="absolute inset-0 flex flex-col items-center z-20 pointer-events-none bg-black/5 pt-12">
                <p className="text-[12px] font-semibold text-white/90 drop-shadow-md mb-0.5 uppercase tracking-tighter">Domingo, 12 Abr</p>
                <h4 className="text-6xl font-bold tracking-tight text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]">{wp.time}</h4>
                
                <div className="absolute bottom-10 w-full px-10 flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                    <Zap className="w-4 h-4 fill-white text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-2 w-24 h-1 bg-white/30 rounded-full" />
              </div>

              {/* Informações no Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                <span className="inline-block px-4 py-1.5 bg-purple-600 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white font-black mb-2 w-fit">
                  {wp.tag}
                </span>
                <h3 className="font-black text-2xl text-white tracking-tight">{wp.title}</h3>
              </div>
              
              {/* Notch Simulado */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-40 border border-white/5" />
            </div>
          ))}
        </div>

        {/* Gradientes nas bordas */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-gray-50 to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-gray-50 to-transparent z-30 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: 'OLED ready', desc: 'Pretos profundos e cores HDR calibradas para telas de última geração.', icon: Star },
             { title: 'Zero Lag', desc: 'Codificação eficiente que mantém o desempenho do seu celular intacto.', icon: ShieldCheck },
             { title: 'Ultra HD 4K', desc: 'Nitidez extrema mesmo em telas grandes ou tablets.', icon: Zap }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -10 }}
               className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50"
             >
               <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                 <item.icon className="w-7 h-7 text-purple-600" />
               </div>
               <h4 className="text-2xl font-black mb-3 text-gray-900">{item.title}</h4>
               <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
