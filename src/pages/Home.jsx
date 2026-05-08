import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Heart, Users } from 'lucide-react';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <BookOpen size={64} className="mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The Holy Bible
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Read, explore, and save your favorite verses
          </p>
          {!user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/bible"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Bible
              </Link>
            </div>
          ) : (
            <Link
              to="/bible"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Reading
            </Link>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Complete Bible</h2>
            <p className="text-gray-600">
              Access all books, chapters, and verses in an easy-to-navigate interface
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Heart size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Save Favorites</h2>
            <p className="text-gray-600">
              Bookmark your favorite verses and access them anytime
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Users size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Personal Profile</h2>
            <p className="text-gray-600">
              Create an account and keep your favorites synchronized
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}