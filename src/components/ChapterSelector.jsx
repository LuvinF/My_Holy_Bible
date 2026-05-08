export default function ChapterSelector({ book, selectedChapter, onSelectChapter }) {
  if (!book) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-lg mb-4 text-gray-900">Chapters</h3>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
        {Array.from({ length: book.chapters }, (_, i) => i + 1).map(chapter => (
          <button
            key={chapter}
            onClick={() => onSelectChapter(chapter)}
            className={`p-2 rounded text-sm font-medium transition-colors ${
              selectedChapter === chapter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            {chapter}
          </button>
        ))}
      </div>
    </div>
  );
}