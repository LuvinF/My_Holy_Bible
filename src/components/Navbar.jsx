import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Home, Heart, User, LogOut, Sheet, PenBoxIcon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <BookOpen size={28} />
            <span>Holy Bible</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/bible" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
              <BookOpen size={18} />
              <span>Bible</span>
            </Link>
            <Link to="/about" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
            <PenBoxIcon size={18}/>
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
            <Sheet size={18}/>
              Contact
            </Link>
            {user && (
              <>
                <Link to="/favorites" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
                  <Heart size={18} />
                  <span>Favorites</span>
                </Link>
                <Link to="/profile" className="hover:text-blue-100 transition-colors flex items-center space-x-1">
                  <User size={18} />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            )}
            {!user && (
              <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 border-t border-blue-500 pt-4">
            <Link to="/" className="block hover:text-blue-100 transition-colors">
              Home
            </Link>
            <Link to="/bible" className="block hover:text-blue-100 transition-colors">
              Bible
            </Link>
            <Link to="/about" className="block hover:text-blue-100 transition-colors">
              About
            </Link>
            <Link to="/contact" className="block hover:text-blue-100 transition-colors">
              Contact
            </Link>
            {user && (
              <>
                <Link to="/favorites" className="block hover:text-blue-100 transition-colors">
                  Favorites
                </Link>
                <Link to="/profile" className="block hover:text-blue-100 transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors text-left"
                >
                  Logout
                </button>
              </>
            )}
            {!user && (
              <Link to="/login" className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}