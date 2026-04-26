import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import HorizontalDishScroller from '../components/HorizontalDishScroller';
import CategoryTabs from '../components/CategoryTabs';
import DishCard from '../components/DishCard';

// import icon
import { OrderIcon } from '../components/Icons';

// import data
import { categories, dishes } from '../data/data';

function Menu() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <div className="bg-white px-4 pt-4 pb-2">
        <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white py-3 text-center">
          <OrderIcon />
          <span className="font-medium text-gray-800">$orderStatus$</span>
        </button>
      </div>
      <div className="sticky top-16 z-40 border-b border-gray-200 bg-white px-4 py-3">
        <SearchBar />
      </div>
      <div className="bg-white">
        <h2 className="border-b border-gray-200 px-4 py-2 font-semibold">
          $search result$
        </h2>
      </div>

      <HorizontalDishScroller />
      {/* Category Tabs */}
      <CategoryTabs />
      {/* Dishes by Category */}
      <div className="mt-2">
        {categories.map((category) => (
          <div className="mb-6">
            <h2 className="border-b border-gray-200 bg-white px-4 py-3 font-bold">
              {category.name}
            </h2>
            <div className="bg-white">
              {dishes
                .filter((dish) => dish.category_id === category.id)
                .map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
