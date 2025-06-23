import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atendimento Presencial | Dra. Cristiane Pereira Duarte",
  description: "Atendimento psicológico presencial em Alphaville, Barueri. Consulte com a Dra. Cristiane Duarte, psicóloga com mais de 25 anos de experiência.",
};

export default function AtendimentoPresencial() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] flex items-center bg-white">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.svg')] opacity-10"></div>
        <div className="container-section relative z-10 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
                Atendimento Presencial
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-secondary mb-4">
                Psicóloga em Alphaville, Barueri
              </h2>
              <p className="text-lg mb-6">
                O atendimento presencial oferece um espaço acolhedor e seguro para que você possa 
                explorar suas questões emocionais com o suporte profissional adequado.
              </p>
              <a 
                href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta%20presencial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Agende sua Consulta Presencial
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/Foto_fachadafrente_localizacao_consultorio.jpeg" 
                alt="Consultório da Dra. Cristiane Duarte em Alphaville" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-section">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios do Atendimento Presencial</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Conexão Humana</h3>
              <p>
                O contato presencial permite uma conexão mais profunda entre paciente e terapeuta, 
                facilitando a construção de vínculo terapêutico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Ambiente Terapêutico</h3>
              <p>
                Um espaço físico dedicado à terapia, livre de distrações e preparado para 
                proporcionar conforto e segurança emocional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Comunicação Integral</h3>
              <p>
                A percepção completa da linguagem corporal e expressões faciais enriquece 
                o processo terapêutico e a compreensão mútua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Consultório em Alphaville</h2>
              <p className="mb-4">
                Localizado em um ambiente tranquilo e de fácil acesso em Alphaville, o consultório 
                foi planejado para proporcionar conforto e privacidade durante as sessões.
              </p>
              <p className="mb-4">
                O espaço conta com salas climatizadas, ambiente acolhedor e toda a estrutura 
                necessária para um atendimento de qualidade.
              </p>
              <p className="mb-6">
                Estacionamento disponível no local e proximidade com as principais vias de acesso 
                de Alphaville e Barueri.
              </p>
              <a 
                href="https://wa.me/5511997876371?text=Gostaria%20de%20obter%20mais%20informações%20sobre%20o%20atendimento%20presencial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Saiba Mais Pelo WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image 
                src="/images/foto_consultorio_interno_dra_cris.jpeg" 
                alt="Interior do consultório" 
                width={300} 
                height={200}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <Image 
                src="/images/fotos_indoor_consultorio_dra_cria (1).jpeg" 
                alt="Sala de atendimento" 
                width={300} 
                height={200}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <Image 
                src="/images/fotos_indoor_consultorio_dra_cria (2).jpeg" 
                alt="Ambiente do consultório" 
                width={300} 
                height={200}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <Image 
                src="/images/fotos_indoor_consultorio_dra_cria (3).jpeg" 
                alt="Espaço terapêutico" 
                width={300} 
                height={200}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold mb-6">Agende sua Consulta Presencial</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Dê o primeiro passo para cuidar da sua saúde mental. Entre em contato para 
            agendar uma consulta ou tirar suas dúvidas sobre o atendimento presencial.
          </p>
          <a 
            href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta%20presencial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
