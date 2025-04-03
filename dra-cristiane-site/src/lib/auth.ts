import { useState, useEffect } from 'react';

// Senha fixa para autenticação (não é uma boa prática, mas atende o requisito)
const ADMIN_PASSWORD = '2210@';

// Chave para armazenar o token no localStorage
const AUTH_TOKEN_KEY = 'admin_auth_token';

// Função para verificar a senha
export function verificarSenha(senha: string): boolean {
  return senha === ADMIN_PASSWORD;
}

// Função para criar um token simples (não seguro para produção)
export function gerarToken(): string {
  return `admin_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

// Hook personalizado para gerenciar o estado de autenticação
export function useAuth() {
  const [autenticado, setAutenticado] = useState<boolean>(false);
  const [carregando, setCarregando] = useState<boolean>(true);

  // Verificar se há um token salvo ao carregar
  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    setAutenticado(!!token);
    setCarregando(false);
  }, []);

  // Função para login
  const login = (senha: string): boolean => {
    if (verificarSenha(senha)) {
      const token = gerarToken();
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      setAutenticado(true);
      return true;
    }
    return false;
  };

  // Função para logout
  const logout = (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    setAutenticado(false);
  };

  return {
    autenticado,
    carregando,
    login,
    logout
  };
}

// Middleware para páginas protegidas
export function verificarAutenticacao(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
} 