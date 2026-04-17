import { motion } from 'motion/react';
import { User, MapPin, School, Trophy, Calendar } from 'lucide-react';

export default function PersonalDetails() {
  const details = [
    { icon: <User size={20} />, label: 'Idade', value: '17 anos' },
    { icon: <School size={20} />, label: 'Formação', value: 'Técnico em ADS - 3º Ano' },
    { icon: <Calendar size={20} />, label: 'Status', value: 'Em conclusão' },
    { icon: <MapPin size={20} />, label: 'Localização', value: 'Paulista, PE' },
  ];

  const highlights = [
    { 
      title: 'Top 3 NASA Space Apps Recife', 
      desc: 'Reconhecimento internacional no maior hackathon do mundo, desenvolvendo solução para qualidade do ar.',
      year: '2025'
    },
    { 
      title: '1º Lugar Early Stage Sebrae', 
      desc: 'Vencedor de programa de aceleração com foco em negócios inovadores e potencial de mercado.',
      year: '2025'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">
              Detalhes <span className="text-purple-400">Pessoais</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {details.map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-purple-500/10">
                  <div className="text-purple-400 mb-3">{item.icon}</div>
                  <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-lg font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">
              Principais <span className="text-purple-400">Conquistas</span>
            </h2>
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div key={i} className="group relative glass p-8 rounded-3xl border-purple-500/10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Trophy size={80} />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-bold mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-purple-200/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
