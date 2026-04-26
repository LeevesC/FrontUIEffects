import { hotSellingDishes } from '../data/data';

function HorizontalDishScroller() {
  const dishes = [...hotSellingDishes];
  return (
    <div className="bg-white py-4">
      <h2 className="mb-3 px-2 text-left text-lg font-bold">$title$</h2>
      <div className="hide-scrollbar flex overflow-x-auto pb-2">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="ml-2 w-36 flex-shrink-0 cursor-pointer last:mr-2"
          >
            <div className="relative mb-2 h-36 w-full overflow-hidden rounded-lg">
              <img
                src={'/placeholder-dish.jpg'}
                alt="img"
                className="h-full w-full object-cover"
              />
              {dish.isHot && (
                <div className="absolute top-0 right-0 rounded-bl-lg bg-red-600 px-2 py-1 text-xs text-white">
                  $hot$
                </div>
              )}

              {/* 添加到购物车按钮 */}
              <button
                className={`absolute right-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md`}
              >
                <span
                  className="text-xl leading-none text-gray-900"
                  style={{ marginTop: '-4px' }}
                >
                  +
                </span>
              </button>
            </div>
            <h3 className="mb-1 line-clamp-1 text-left text-sm font-medium">
              {dish.name}
            </h3>
            <p className="text-left text-sm font-semibold text-gray-800">
              ${dish.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalDishScroller;
