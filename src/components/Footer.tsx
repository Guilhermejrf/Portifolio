import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-display font-bold text-gradient mb-2">
              Guilherme José
            </div>
            <p className="text-sm text-purple-200/40">
              © {new Date().getFullYear()} • Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Guilhermejrf" target="_blank" rel="noreferrer" className="text-purple-200/40 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-freitas-1809b7398" target="_blank" rel="noreferrer" className="text-purple-200/40 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:guilhermejrf08@gmail.com" className="text-purple-200/40 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
