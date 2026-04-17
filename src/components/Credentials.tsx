import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Credential } from '../types';

export default function Credentials() {
  const credentials: (Credential & { icon: React.ReactNode })[] = [
    {
      title: 'Galactic Problem Solver',
      issuer: 'NASA International Space Apps Challenge',
      date: 'Out 2025',
      skills: ['Gestão de projetos', 'Cybersegurança'],
      icon: <Award className="text-purple-400" />
    },
    {
      title: 'Gerenciamento de ameaças cibernéticas',
      issuer: 'Cisco Networking Academy',
      date: 'Set 2025',
      skills: ['Gestão de vulnerabilidade'],
      link: 'https://drive.google.com/file/d/11aPwGgrXqRAlpesIEB0Ah-t4jhJVNkLo/view?usp=sharing',
      icon: <ShieldCheck className="text-purple-400" />
    },
    {
      title: 'Defesa de redes',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 2025',
      skills: ['Segurança de rede'],
      link: 'https://drive.google.com/file/d/10rUhh7ToZFE1KIrDceKJ-EL4pzV-X509/view?usp=sharing',
      icon: <ShieldCheck className="text-purple-400" />
    },
    {
      title: 'Introdução à Cibersegurança',
      issuer: 'Cisco Networking Academy',
      date: 'Mar 2026',
      skills: ['Segurança digital'],
      link: 'https://drive.google.com/file/d/1rgH4slr7_UAJ8cJmDxc-XNCsMKu3U6qa/view?usp=sharing',
      icon: <ShieldCheck className="text-purple-400" />
    },
    {
      title: 'Fundamentos de Hardware do computador',
      issuer: 'Cisco Networking Academy',
      date: 'Ago 2024',
      skills: ['Hardware'],
      link: 'https://drive.google.com/file/d/1iD3ivHLugvb1NsY-_ws_QDbr6008mIsy/view?usp=sharing',
      icon: <CheckCircle2 className="text-purple-400" />
    },
    {
      title: 'Projeto Technomaker',
      issuer: 'INSTITUTO MEMAKER',
      date: 'Out 2024',
      skills: ['Soft Skills'],
      link: 'https://drive.google.com/file/d/1zqLNf0gMnwkPDTOZbTbbbaEgZC7Yhyeh/view?usp=sharing',
      icon: <Award className="text-purple-400" />
    }
  ];

  return (
    <section id="credentials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">
          Credenciais e <span className="text-purple-400">Verificações</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cert, i) => {
            const cardProps = cert.link
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : { href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault() };

            return (
              <motion.a
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass p-6 rounded-2xl border-purple-500/10 hover:border-purple-500/30 transition-all group cursor-pointer"
                {...cardProps}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-900/30 rounded-xl group-hover:bg-purple-600 transition-colors">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] text-purple-400 font-bold uppercase mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span key={skill} className="text-[10px] bg-purple-600/10 px-2 py-0.5 rounded text-purple-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-purple-200/40 font-medium">
                    {cert.date}
                  </span>
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-purple-300">
                  Clique para ver o certificado
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
