"use client";
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AdminHeaderProps {
  titulo: string;
}

const AdminHeader = ({ titulo }: AdminHeaderProps) => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/adminblog');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/adminblog" className="text-xl font-bold text-primary-dark">
              Painel Administrativo
            </Link>
            <span className="mx-3 text-gray-300">/</span>
            <h1 className="text-lg font-medium text-gray-800">{titulo}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-sm text-gray-600 hover:text-primary px-3 py-2 rounded-md"
            >
              Visualizar Site
            </Link>
            
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zM2 4a2 2 0 012-2h7.586a1 1 0 01.707.293l5 5A1 1 0 0118 8v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" clipRule="evenodd" />
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader; 