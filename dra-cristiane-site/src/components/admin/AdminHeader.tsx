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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <div className="flex items-center flex-wrap">
            <Link href="/adminblog" className="text-xl font-bold text-primary-dark mr-3">
              Painel Administrativo
            </Link>
            <div className="hidden sm:block">
              <span className="mx-3 text-gray-300">/</span>
              <h1 className="inline text-lg font-medium text-gray-800">{titulo}</h1>
            </div>
          </div>
          <div className="sm:hidden text-lg font-medium text-gray-800 -mt-1">
            {titulo}
          </div>
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Link 
              href="/"
              className="flex-1 sm:flex-none text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-center"
            >
              Visualizar Site
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex-1 sm:flex-none text-sm bg-red-100 text-red-700 hover:bg-red-200 px-3 py-2 rounded-md flex items-center justify-center"
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