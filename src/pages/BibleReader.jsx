import { useState, useMemo } from 'react';
import { bibleData } from '../data/bible';
import BookList from '../components/BookList';
import ChapterSelector from '../components/ChapterSelector';
import SearchBar from '../components/SearchBar';
import VerseCard from '../components/VerseCard';

export default function BibleReader() {
  const [selectedBook, setSelectedBook] = useState(bibleData[0]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Get verses for selected book and chapter
  const verses = useMemo(() => {
    if (!selectedBook || !selectedBook.verses[selectedChapter]) {
      return [];
    }
    return selectedBook.verses[selectedChapter];
  }, [selectedBook, selectedChapter]);

  // Filter verses by search query
  const filteredVerses = useMemo(() => {
    if (!searchQuery.trim()) {
      return verses;
    }
    const query = searchQuery.toLowerCase();
    return verses.filter(v => v.text.toLowerCase().includes(query));
  }, [verses, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Bible Reader</h1>

        {/* Search */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <BookList selectedBook={selectedBook} onSelectBook={setSelectedBook} />
            <ChapterSelector
              book={selectedBook}
              selectedChapter={selectedChapter}
              onSelectChapter={setSelectedChapter}
            />
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedBook.name} {selectedChapter}
              </h2>
              <p className="text-gray-600">
                {filteredVerses.length} verse{filteredVerses.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="space-y-4">
              {filteredVerses.length > 0 ? (
                filteredVerses.map(verse => (
                  <VerseCard
                    key={verse.verse}
                    book={selectedBook.name}
                    chapter={selectedChapter}
                    verse={verse.verse}
                    text={verse.text}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No verses found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}