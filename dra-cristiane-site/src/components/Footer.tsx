import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-section">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dra. Cristiane Pereira Duarte</h3>
            <p className="mb-2">Psicóloga Clínica e Hospitalar</p>
            <p className="mb-2">CRP n. 06/63449-8</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/#abordagem" className="hover:text-primary transition-colors">
                  Abordagem
                </Link>
              </li>
              <li>
                <Link href="/#experiencia" className="hover:text-primary transition-colors">
                  Experiência
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <span>(11) 99999-9999</span>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>contato@dracristiane.com.br</span>
              </p>
              <div>
                <p className="font-medium mt-4 mb-1">Atendimento Presencial:</p>
                <p>Av. Trindade 254, Bethaville Office – Barueri</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Dra. Cristiane Pereira Duarte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 