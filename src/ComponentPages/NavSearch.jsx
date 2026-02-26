import { useState, useRef, useEffect } from "react";

export default function NavSearch () {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef(null);
  const mobileInputRef = useRef(null);

  useEffect(() => {
    if (mobileOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [mobileOpen]);

  const handleSearch = () => {
    if (query.trim()) {
      alert(`Searching for: ${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-start justify-center">

      {/* Desktop: always visible search input with icon button */}
      <div className="hidden lg:flex items-center w-full max-w-md">
        <div className="flex items-center w-full border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="flex-1 px-4 py-2.5 text-sm text-gray-700 outline-none bg-transparent"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2.5 cursor-pointer text-white flex items-center justify-center transition-colors"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={4}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: search button that reveals input below */}
      <div className=" lg:hidden relative">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex items-center justify-center p-2.5 bg-transparent cursor-pointer text-white rounded-lg transition-all duration-200 shadow-sm w-full"
          aria-label="Toggle search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={4}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {mobileOpen && (
          <div className="absolute w-[130px] top-full left-0 right-0 mt-2 flex items-center gap-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 z-50">
            <input
              ref={mobileInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search destinations..."
              className="flex-1 w-[167px] py-3 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}