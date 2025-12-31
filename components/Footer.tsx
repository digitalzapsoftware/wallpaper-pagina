
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center font-bold text-xs text-white">P</div>
          <span className="font-bold tracking-tight text-gray-900">PREMIUM <span className="text-purple-600">PACK</span></span>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Transformando telas comuns em experiências de luxo com wallpapers 4K exclusivos e selecionados.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest mb-10">
          <a href="#" className="hover:text-purple-600 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Suporte</a>
        </div>
        
        <div className="text-[10px] text-gray-400 font-semibold">
          &copy; {new Date().getFullYear()} Premium Wallpapers. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
