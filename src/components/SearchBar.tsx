import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar = ({
  username,
  setUsername,
  loading,
  onSearch,
  onClear,
}: SearchBarProps) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100/50">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          {/* Search Icon */}
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter GitHub username (e.g. torvalds)"
            className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Clear Icon */}
          {username && (
            <button
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <button
          onClick={onSearch}
          disabled={loading || !username.trim()}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
        >
          <Search size={18} />
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;