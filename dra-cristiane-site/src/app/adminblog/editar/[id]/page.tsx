"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import PostForm from '@/components/admin/PostForm';
import AdminHeader from '@/components/admin/AdminHeader';

export default function EditarPost() {
  const [carregando, setCarregando] = useState(true);
  const { autenticado } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!autenticado && !carregando) {
      router.push('/adminblog');
    } else {
      setCarregando(false);
    }
  }, [autenticado, carregando, router]);

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!autenticado) {
    return null; // Redirecionando, não renderiza nada
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader titulo="Editar Post" />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <PostForm />
      </div>
    </div>
  );
} 