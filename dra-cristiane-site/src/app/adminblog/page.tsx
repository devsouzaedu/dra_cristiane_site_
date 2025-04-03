"use client";
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import LoginForm from '@/components/admin/LoginForm';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default function AdminBlogPage() {
  const { autenticado, carregando } = useAuth();

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {autenticado ? (
        <AdminDashboard />
      ) : (
        <LoginForm />
      )}
    </div>
  );
} 