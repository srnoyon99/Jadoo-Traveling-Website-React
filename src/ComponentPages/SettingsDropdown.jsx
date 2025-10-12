import React, { useEffect, useState } from 'react';
import {
  User, Settings, BarChart3, Gift, Calendar, Car,
  Bookmark, Heart, Clock, LogOut
} from 'lucide-react';
import { useAuth } from '../Hooks/useAuth';
import { Link } from 'react-router-dom'; // ✅ fixed import

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    photo: '',
  });

  // ✅ Load user info from Firebase or localStorage
  useEffect(() => {
    const loadUserInfo = () => {
      const savedData = localStorage.getItem('userProfile');

      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData({
          Name: parsedData.Name || currentUser?.displayName || 'Unknown User',
          email: parsedData.email || currentUser?.email || 'No Email',
          phone: parsedData.phone || '',
          photo: parsedData.photo || currentUser?.photoURL || '',
        });
      } else if (currentUser) {
        setFormData({
          Name: currentUser.displayName || 'Unknown User',
          email: currentUser.email || 'No Email',
          phone: '',
          photo: currentUser.photoURL || '',
        });
      }
    };

    loadUserInfo();
  }, [currentUser]);

  // ✅ ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ✅ Menu items
  const menuItems = [
    { icon: Settings, label: 'Settings & Privacy', link: '/privacysetting' },
    { icon: BarChart3, label: 'Professional Dashboard', link: '/dashboard' },
    { icon: Gift, label: 'Special Offers', link: '/' },
    { icon: Calendar, label: 'Special Events', link: '/' },
    { icon: Car, label: 'Vehicle Finds', link: '/' },
    { icon: Bookmark, label: 'Saved Booking', link: '/' },
    { icon: Heart, label: 'Favorite Booking', link: '/' },
    { icon: Clock, label: 'Previous Booking', link: '/' },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  // ✅ Fallback avatar
  const getUserPhoto = () => {
    return (
      formData.photo ||
      currentUser?.photoURL ||
      '/default-avatar.png'
    );
  };

  return (
    <div className="relative inline-block text-left">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-green-400 transition-colors duration-200"
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={getUserPhoto()}
          alt="User Avatar"
          onError={(e) => (e.target.src = '/default-avatar.png')}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden transform transition-all duration-200 scale-100 opacity-100"
            role="menu"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <div className="flex items-center space-x-3">
                {/* {
                  currentUser.photoURL ?
                    <img className='  w-10 h-10 rounded-full  flex items-center justify-center ' src={currentUser.photoURL} alt="img" />
                    :
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={getUserPhoto()}
                      alt="User Avatar"
                      onError={(e) => (e.target.src = '/default-avatar.png')}
                    />
                } */}
                <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={getUserPhoto()}
                      alt="User Avatar"
                      onError={(e) => (e.target.src = '/default-avatar.png')}
                    />
                    
                <div>
                  <p className="font-medium">{formData.Name}</p>
                  <p className="text-sm text-blue-100">{currentUser.email}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-3 flex items-center space-x-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <Icon className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center space-x-3 text-red-600 hover:bg-red-50 transition-colors duration-150"
              >
                <LogOut className="w-5 h-5 text-red-500" />
                <span className="font-medium">Logout</span>
              </button>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Version 1.0.0</p>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default SettingsDropdown;