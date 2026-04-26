function DishCard({ dish }) {
  return (
    <div className="flex cursor-pointer justify-between border-b border-gray-200 bg-white py-4">
      {/* Left side: Dish info */}
      <div className="flex flex-1 flex-col justify-between pr-3 pl-2">
        <div>
          <h3 className="mb-1 text-left text-base font-bold">{dish.name}</h3>
          <p className="mb-2 line-clamp-2 text-sm text-gray-500">
            {dish.description}
          </p>
        </div>
        <div className="flex items-center">
          {dish.isHot && (
            <span className="mr-2 rounded bg-red-100 px-2 py-1 text-xs text-red-800">
              $$
            </span>
          )}
          <span className="font-semibold">${dish.price.toFixed(2)}</span>
        </div>
      </div>

      {/* Right side: Image and add button */}
      <div className="relative mr-2 h-24 w-24 flex-shrink-0">
        <img
          src={'/placeholder-dish.jpg'}
          alt="img"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default DishCard;
