import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import eu from '../assets/image/Eunanevemenor.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-semibold tracking-wider uppercase text-purple-400 border-purple-500/30"
        >
          Técnico em ADS • 3° Ano
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-10">
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-200/70 leading-relaxed mb-6"
            >
              Desenvolvedor em formação e entusiasta de inovação. 
              Transformando desafios em soluções tecnológicas de impacto social. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-200/70 leading-relaxed"
            >
              Participando frequentemente de hackathons e eventos de tecnologia, buscando sempre aprender e crescer na área de desenvolvimento de software.
            </motion.p>
          </div>

          <div className="flex-1 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              src={eu}
              alt="Guilherme José - Desenvolvedor"
              className="w-64 h-64 rounded-full object-cover border-4 border-purple-500/30 shadow-lg shadow-purple-900/40"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all shadow-lg shadow-purple-900/40"
          >
            Ver Projetos
          </a>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-purple-400"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
