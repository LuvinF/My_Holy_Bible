import { bibleData } from '../data/bible';

export default function BookList({ selectedBook, onSelectBook }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 h-96 overflow-y-auto">
      <h3 className="font-bold text-lg mb-4 text-gray-900">Books of the Bible</h3>
      <div className="space-y-2">
        {bibleData.map(book => (
          <button
            key={book.id}
            onClick={() => onSelectBook(book)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedBook?.id === book.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            {book.name}
          </button>
        ))}
      </div>
    </div>
  );
}