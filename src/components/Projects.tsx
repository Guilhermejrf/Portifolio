import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Globe, Cpu, Brain, Wind, ForkKnife } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projects: (Project & { icon: React.ReactNode })[] = [
    {
      title: 'Web Pass',
      description: 'Plataforma inteligente de reservas e gestão de hospitalidade. O projeto foca em simplificar a conexão entre clientes e estabelecimentos, garantindo um fluxo ágil de agendamentos.',
      technologies: ['HTML', 'CSS', 'JS'],
      icon: <ForkKnife className="text-purple-400" size={32} />
    },
    {
      title: 'Senz',
      description: 'Pulseira inteligente que detecta ansiedade e intervém com estímulos como vibrações, complementada por um app com IA para monitoramento e suporte.',
      technologies: ['Flutter', 'Firebase', 'ESP32', 'AI', 'IoT'],
      icon: <Cpu className="text-purple-400" size={32} />
    },
    {
      title: 'R.U.M.O',
      description: 'Sistema que coleta e analisa dados de uma região para identificar padrões e prever quando problemas como epidemias ou desastres naturais podem ocorrer.',
      technologies: ['TSX', 'Node.js', 'Firebase', 'React'],
      icon: <Globe className="text-purple-400" size={32} />
    },
    {
      title: 'AirQMBA',
      description: 'Projeto da NASA que mede a qualidade do ar através de sensores terrestres e via satélite para recomendar o melhor horário para sair de casa.',
      technologies: ['HTML', 'CSS', 'JS', 'Node.js', 'Sensors'],
      icon: <Wind className="text-purple-400" size={32} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">
              Projetos em <span className="text-purple-400">Destaque</span>
            </h2>
            <p className="text-purple-200/60 max-w-xl">
              Uma seleção de iniciativas que unem tecnologia, hardware e análise de dados para resolver problemas reais.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-purple-400 font-semibold cursor-pointer group"
          >
            Ver todos no GitHub 
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-[2rem] border-purple-500/10 hover:border-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-900/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-purple-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.title === 'Web Pass' ? (
                    <a 
                      href="https://owebpass.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <Code2 size={18} />
                    </a>
                  ) : project.title === 'Senz' ? (
                    <a 
                      href="https://senzapp.site" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <Code2 size={18} />
                    </a>
                  ) : project.title === 'R.U.M.O' ? (
                    <a 
                      href="https://r-u-m-o.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <Code2 size={18} />
                    </a>
                  ) : project.title === 'AirQMBA' ? (
                    <a 
                      href="https://air-quality-monitoring-and-bridge-a.vercel.app/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-600 transition-colors"
                    >
                      <Code2 size={18} />
                    </a>
                  ) : (
                    <div className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                      <Code2 size={18} />
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-purple-200/60 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-purple-600/10 text-purple-300 text-xs font-medium rounded-full border border-purple-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
