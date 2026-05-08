import { useFavorites } from '../context/FavoritesContext';
import VerseCard from '../components/VerseCard';
import { Heart } from 'lucide-react';

export default function Favorites() {
  const { favorites, loading } = useFavorites();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <Heart size={32} className="text-red-500 fill-red-500" />
          <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
        </div>

        {favorites.length > 0 ? (
          <div className="space-y-4">
            {favorites.map(favorite => (
              <VerseCard
                key={favorite.id}
                book={favorite.book}
                chapter={favorite.chapter}
                verse={favorite.verse}
                text={favorite.text}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-500">
              Start adding verses to your favorites by clicking the heart icon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}