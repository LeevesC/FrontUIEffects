import { BackIcon, CartIcon } from './Icons';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white py-3">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center">
          <button className="mr-2 p-1">
            <BackIcon />
          </button>
          <h1 className="text-xl font-bold">$Title$</h1>
          <div className="ml-4 flex items-center">
            <span className="font-bold">$tableNumber$</span>
          </div>
        </div>

        <div className="mr-4 flex items-center">
          <button className="relative mr-2 p-2">
            <CartIcon />
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              $total items$
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
