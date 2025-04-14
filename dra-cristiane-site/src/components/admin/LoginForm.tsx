"use client";
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    // Simular um pequeno atraso para melhor experiência do usuário
    setTimeout(() => {
      const sucesso = login(senha);
      
      if (sucesso) {
        toast.success('Login realizado com sucesso!');
        
        // Adicionar um pequeno atraso antes de recarregar a página
        // para garantir que o toast seja exibido e o estado de autenticação seja atualizado
        setTimeout(() => {
          // Forçar atualização da página para refletir o novo estado de autenticação
          router.refresh();
          
          // Também podemos redirecionar para a mesma página
          // para garantir que o estado seja recarregado corretamente
          window.location.href = '/adminblog';
        }, 1000);
      } else {
        setErro('Senha incorreta. Tente novamente.');
        toast.error('Senha incorreta. Tente novamente.');
        setCarregando(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary-dark">
            Painel Administrativo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-700">
            Área restrita para gerenciamento do blog
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                Senha de acesso
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-dark focus:border-primary-dark focus:z-10 sm:text-sm"
                placeholder="Digite a senha de acesso"
              />
            </div>
          </div>

          {erro && (
            <div className="text-red-600 text-sm text-center font-medium">{erro}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={carregando}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-dark hover:bg-primary-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
            >
              {carregando ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md inline-block"
          >
            Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 