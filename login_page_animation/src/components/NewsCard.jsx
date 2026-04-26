function NewsCard() {
  return (
    <div
      className="card bottom-6 left-6 w-full max-w-md animate-fade-in bg-gray-900 text-white md:relative md:bottom-auto md:left-auto"
      style={{ animationDelay: '0.4s', maxWidth: '500px' }}
    >
      <div className="p-8">
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="mb-1 text-3xl font-bold">New suites</h2>
          <p className="text-gray-400">Minimalist Collection</p>
        </div>

        <div
          className="mt-4 flex animate-slide-up justify-end"
          style={{ animationDelay: '0.6s' }}
        >
          <button className="btn border border-gray-700 text-white transition-all duration-300 hover:bg-gray-800">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
