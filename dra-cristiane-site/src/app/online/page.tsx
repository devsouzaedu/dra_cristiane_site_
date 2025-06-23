import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atendimento Online | Dra. Cristiane Pereira Duarte",
  description: "Atendimento psicológico online com a Dra. Cristiane Duarte. Sessões de terapia à distância com a mesma qualidade do atendimento presencial.",
};

export default function AtendimentoOnline() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] flex items-center bg-white">
        <div className="absolute inset-0 bg-[url('/images/bg-pattern.svg')] opacity-10"></div>
        <div className="container-section relative z-10 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
                Atendimento Online
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-secondary mb-4">
                Psicoterapia à Distância
              </h2>
              <p className="text-lg mb-6">
                O atendimento psicológico online oferece a mesma qualidade e eficácia da terapia presencial, 
                com a conveniência de ser realizado onde você estiver, economizando tempo e deslocamento.
              </p>
              <a 
                href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta%20online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Agende sua Consulta Online
              </a>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-lg p-6">
              <div className="relative w-full aspect-video flex items-center justify-center bg-primary/10 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                  <path d="M2 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sessões por Videochamada</h3>
              <p className="mb-4">
                As sessões online são realizadas através de plataformas seguras de videochamada, 
                garantindo o sigilo e a privacidade do atendimento.
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src="/images/dra_cris_pfp.jpeg" 
                    alt="Dra. Cristiane Duarte" 
                    width={48} 
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Dra. Cristiane Duarte</p>
                  <p className="text-sm text-gray-600">CRP n. 06/63449-8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-section">
          <h2 className="text-3xl font-bold text-center mb-12">Vantagens do Atendimento Online</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Praticidade</h3>
              <p>
                Realize suas sessões de qualquer lugar, economizando tempo de deslocamento 
                e adaptando a terapia à sua rotina.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Continuidade</h3>
              <p>
                Mesmo em viagens ou mudanças de cidade, você pode manter a regularidade 
                do seu tratamento psicológico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Conforto</h3>
              <p>
                Participe das sessões em um ambiente familiar e confortável, 
                o que pode facilitar a expressão de sentimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Agendamento</h3>
                  <p>
                    Entre em contato pelo WhatsApp para agendar sua primeira sessão online. 
                    Você receberá todas as informações necessárias sobre horários disponíveis e valores.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Preparação</h3>
                  <p>
                    Antes da sessão, você receberá um link para a videochamada. Prepare um local 
                    tranquilo e privado, com boa conexão de internet.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Sessão</h3>
                  <p>
                    As sessões online têm a mesma duração das presenciais (50 minutos) e seguem 
                    a mesma abordagem terapêutica personalizada.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Continuidade</h3>
                  <p>
                    Ao final da sessão, você poderá agendar seu próximo atendimento, mantendo 
                    a regularidade do processo terapêutico.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://wa.me/5511997876371?text=Gostaria%20de%20obter%20mais%20informações%20sobre%20o%20atendimento%20online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Saiba Mais Pelo WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Recomendações para a Sessão Online</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Escolha um ambiente silencioso e privado, onde não haja interrupções</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verifique sua conexão de internet antes da sessão</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Use fones de ouvido para melhor qualidade de áudio e privacidade</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tenha água por perto e esteja em uma posição confortável</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Desligue notificações e coloque o celular no modo "não perturbe"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container-section text-center">
          <h2 className="text-3xl font-bold mb-6">Agende sua Consulta Online</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            A terapia online é reconhecida pelo Conselho Federal de Psicologia e oferece os mesmos 
            benefícios do atendimento presencial. Dê o primeiro passo para cuidar da sua saúde mental.
          </p>
          <a 
            href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta%20online"
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
