"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import WhatsAppLink from "@/components/WhatsAppLink";

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setEnviando(false);
    setMensagemEnviada(true);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
    
    // Reset da mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setMensagemEnviada(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-light">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="title-section">Entre em Contato</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Ficarei muito grata por poder ajudar! Fale comigo para agendar uma consulta ou tirar dúvidas sobre meus serviços.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="subtitle mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-primary-dark" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Endereço</h3>
                      <p>Av. Trindade 254, Bethaville Office – Barueri</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <FaPhone className="text-primary-dark" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Telefone</h3>
                      <a 
                        href="tel:+5511997876371"
                        className="hover:text-primary-dark transition-colors"
                      >
                        (11) 99787-6371
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <FaWhatsapp className="text-primary-dark" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">WhatsApp</h3>
                      <WhatsAppLink
                        href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta" 
                        className="hover:text-primary-dark transition-colors"
                      >
                        (11) 99787-6371
                      </WhatsAppLink>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-primary-dark" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <a 
                        href="mailto:crisbia20@hotmail.com"
                        className="hover:text-primary-dark transition-colors"
                      >
                        crisbia20@hotmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="subtitle mb-6">Envie uma Mensagem</h2>
                
                {mensagemEnviada ? (
                  <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="nome" className="block mb-1 font-medium">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="telefone" className="block mb-1 font-medium">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block mb-1 font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 flex justify-center items-center"
                    disabled={enviando}
                  >
                    {enviando ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContatoPage; 