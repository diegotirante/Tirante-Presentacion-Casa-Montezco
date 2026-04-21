/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Home, Key, MapPin, Phone, Mail, Award, Briefcase } from 'lucide-react';

// Configuration
const CONFIG = {
  youtubeId: '2pdcz9p4SwY',
  bgImages: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1920'
  ],
  brandName: 'TIRANTE DIEGO ARIEL',
  mainTitle: 'Postulación LA CASA MONTEZCO',
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden font-sans text-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <Intro key="intro" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full flex flex-col"
        >
          {/* Background Layer with Real Estate Theme */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${CONFIG.bgImages[0]}')` }}
            />
            {/* Subtle Overlay Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
          </div>

          {/* Header */}
          <header className="relative z-20 h-24 flex items-center justify-between px-12 border-b border-white/5 backdrop-blur-sm bg-black/20">
            <div className="flex flex-col">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold tracking-tighter text-amber-500 uppercase"
              >
                {CONFIG.mainTitle}
              </motion.h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-[1px] bg-white/20 mt-1"
              />
            </div>
            
            <div className="flex flex-col items-end">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl font-light tracking-[0.2em] uppercase"
              >
                {CONFIG.brandName}
              </motion.span>
               <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="text-[10px] tracking-[0.4em] uppercase"
              >
                Bienes Raíces de Alta Gama
              </motion.span>
            </div>
          </header>

          <main className="relative z-20 flex-1 flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
            {/* Left Section: Video with Super Recuadro */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="w-full md:w-[45%] h-full flex items-center justify-center"
            >
              <div className="relative group p-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_0_100px_rgba(234,179,8,0.1)]">
                {/* Decorative Frame Elements */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-amber-500 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-amber-500 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-amber-500 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-amber-500 rounded-br-lg" />

                <div className="relative aspect-[9/16] h-[65vh] md:h-[70vh] rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                  <iframe 
                    src={`https://www.youtube.com/embed/${CONFIG.youtubeId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${CONFIG.youtubeId}`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full border-none"
                  ></iframe>
                  
                  {/* Status Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Presentación en Vivo</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Right Section: Real Estate Content & Context */}
            <motion.section 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex-1 flex flex-col gap-8"
            >
              <div className="space-y-4">
                <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Estrategia Inmobiliaria</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase">
                  Vanguardia en el <br />
                  <span className="text-white/40">Mercado de Lujo</span>
                </h2>
                <p className="text-white/60 max-w-lg leading-relaxed font-light">
                  Propuesta estratégica diseñada exclusivamente para potenciar el legado de <span className="text-white font-medium">LA CASA MONTEZCO</span> mediante métodos de tasación integrales y procesos de valoración estandarizados.
                </p>
              </div>

              {/* Real Estate Theme Icons/Features */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <FeatureItem icon={<Building2 size={20} />} title="Gestión de Activos" desc="Tasación integral de bienes muebles e inmuebles." />
                <FeatureItem icon={<Briefcase size={20} />} title="Peritaje Judicial" desc="Rigor técnico en procesos de valoración." />
                <FeatureItem icon={<Award size={20} />} title="Legado Histórico" desc="Respeto por la tradición con visión de futuro." />
                <FeatureItem icon={<Home size={20} />} title="Mercado Global" desc="Estrategias disruptivas para expansión." />
              </div>

              <div className="pt-8 border-t border-white/5">
                 <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/30 uppercase tracking-widest">Contacto</span>
                        <span className="text-sm font-medium">diegotirante@gmail.com</span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-amber-500 text-black text-xs font-black uppercase tracking-widest rounded-md"
                    >
                      Descargar CV Completo
                    </motion.button>
                 </div>
              </div>
            </motion.section>
          </main>

          {/* Footer Decoration */}
          <footer className="relative z-20 h-16 flex items-center justify-center border-t border-white/5 px-12 bg-black/20">
            <div className="flex gap-12 opacity-30 text-[10px] uppercase font-bold tracking-[0.2em]">
              <div className="flex items-center gap-2"><MapPin size={12} /> Argentina</div>
              <div className="flex items-center gap-2"><Key size={12} /> Gestión Inmobiliaria</div>
              <div className="flex items-center gap-2"><Briefcase size={12} /> Tasaciones</div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
      <div className="text-amber-500 shrink-0 mt-1">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-wider mb-1">{title}</span>
        <span className="text-[10px] text-white/40 leading-normal">{desc}</span>
      </div>
    </div>
  );
}

function Intro({ onFinish }: { onFinish: () => void, key?: string }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      className="absolute inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <div className="mb-12 relative flex flex-col items-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-[1px] bg-white/20 absolute -top-6 max-w-md"
            />
            
            <h1 className="text-white text-7xl md:text-9xl font-black tracking-tighter mb-4 flex gap-4">
              TIRANTE<span className="text-white/10 italic">®</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white text-xl md:text-2xl tracking-[0.4em] uppercase font-light"
            >
              Bienes Raíces
            </motion.p>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-[1px] bg-white/20 absolute -bottom-6 max-w-md"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="flex flex-col items-center gap-6 justify-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-white/20 text-xs font-mono uppercase tracking-[0.3em] leading-none">Cargando Postulación Exclusiva</span>
            </div>
            
            <div className="w-64 h-[1px] bg-white/5 overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`
        }}
      />
    </motion.div>
  );
}

