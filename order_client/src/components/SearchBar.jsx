import { SearchIcon } from './Icons';

function SearchBar() {
  return (
    <form className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="w-full rounded-lg border border-gray-300 py-2 pr-14 pl-10 text-sm shadow-sm focus:border-gray-500 focus:ring-gray-500"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </div>
      </div>
      <button
        type="submit"
        className="absolute inset-y-0 right-0 rounded-r-lg bg-gray-200 px-3 text-sm font-medium text-gray-700 transition duration-200 hover:bg-gray-300 focus:outline-none"
      >
        $search$
      </button>
    </form>
  );
}

export default SearchBar;
