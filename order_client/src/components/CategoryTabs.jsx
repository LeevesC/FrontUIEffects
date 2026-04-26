import { categories } from '../data/data';
function CategoryTabs() {
  return (
    <div className="sticky top-[125px] z-30 border-b border-gray-200 bg-white">
      <div className={`hide-scrollbar flex overflow-x-auto px-4 py-3`}>
        {categories.map((category) => (
          <button
            key={category.id}
            data-category-id={category.id}
            className={`mr-3 min-w-max rounded-full bg-gray-100 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-800 transition-all duration-300 hover:bg-gray-200 hover:shadow-sm`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
