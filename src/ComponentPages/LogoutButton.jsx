import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../Hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium transition-colors duration-200"
    >
      <LogOut className="w-5 h-5 " />
    </button>
  );
};

export default LogoutButton;
