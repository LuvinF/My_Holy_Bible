import { Search, X } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <Search size={20} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search verses..."
          value={query}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
}