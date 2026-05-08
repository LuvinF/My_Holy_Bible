import { useFavorites } from '../context/FavoritesContext';
import { Heart } from 'lucide-react';

export default function VerseCard({ book, chapter, verse, text }) {
  const { isFavorited, addFavorite, removeFavorite, favorites } = useFavorites();
  const favorited = isFavorited(book, chapter, verse);
  const favoriteItem = favorites.find(
    f => f.book === book && f.chapter === chapter && f.verse === verse
  );

  const handleToggleFavorite = async () => {
    if (favorited && favoriteItem) {
      await removeFavorite(favoriteItem.id);
    } else {
      await addFavorite(book, chapter, verse, text);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="text-sm font-semibold text-blue-600">
          {book} {chapter}:{verse}
        </div>
        <button
          onClick={handleToggleFavorite}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <Heart
            size={20}
            className={favorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
    </div>
  );
}