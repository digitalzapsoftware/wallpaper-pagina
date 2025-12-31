
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[3rem] relative overflow-hidden bg-gray-50/30 border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] -z-10" />
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">🎯 Pra Quem É</h2>
            <p className="text-gray-600">Se você se identifica com algum desses pontos, esse pacote foi feito para você.</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            {[
              "Quem quer um celular mais bonito e estiloso",
              "Quem gosta de estética premium (Minimalista, Neon, Futurista)",
              "Quem quer personalizar sem gastar caro em apps de assinatura",
              "Quem busca exclusividade e qualidade 4K real"
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium md:text-lg">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
