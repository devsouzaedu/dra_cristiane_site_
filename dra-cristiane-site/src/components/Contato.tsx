"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contato = () => {
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
                    <h3 className="font-medium text-lg">WhatsApp</h3>
                    <a 
                      href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-dark transition-colors"
                    >
                      (11) 99787-6371
                    </a>
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
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="subtitle mb-6">Envie uma Mensagem</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={enviando}
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    enviando
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primary-dark text-dark"
                  }`}
                >
                  {enviando ? "Enviando..." : "Enviar Mensagem"}
                </button>
                
                {mensagemEnviada && (
                  <p className="text-green-600 text-center">
                    Mensagem enviada com sucesso! Retornarei em breve.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contato; 