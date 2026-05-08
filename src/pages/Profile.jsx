import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
            <div className="bg-blue-100 rounded-full p-4">
              <User size={40} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Email Address
              </label>
              <div className="mt-2 flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <Mail size={20} className="text-gray-400" />
                <p className="text-gray-900">{user?.email}</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Account Status
              </label>
              <div className="mt-2 bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-700 font-semibold">Active</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}