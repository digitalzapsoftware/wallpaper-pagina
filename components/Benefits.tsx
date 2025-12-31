
import React from 'react';
import { Smartphone, Trophy, Layers, Zap, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Smartphone, title: '500+ Opções Reais', desc: 'Não são apenas 10 ou 20. São mais de quinhentos wallpapers exclusivos em alta definição.' },
  { icon: Trophy, title: 'Universo do Futebol', desc: 'Sua paixão na tela: acervo gigante com os maiores clubes, estádios e craques do mundo.' },
  { icon: Layers, title: 'Categorias Ilimitadas', desc: 'Carros esportivos, games, setups neon, natureza, minimalismo e muito mais em um só lugar.' },
  { icon: Globe, title: 'Inúmeros Outros Temas', desc: 'Um ecossistema de imagens variadas para você mudar o visual do celular todos os dias.' },
  { icon: Star, title: 'Qualidade 4K Nativa', desc: 'Nada de imagens pixeladas. Todo o acervo é selecionado para máxima fidelidade visual.' },
  { icon: Zap, title: 'Acesso Vitalício', desc: 'Pague uma vez e tenha o link para baixar qualquer wallpaper do acervo quando quiser.' },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:border-purple-200 transition-all hover:bg-gray-100 hover:shadow-lg shadow-gray-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
