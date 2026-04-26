function EventCard() {
  return (
    <div
      className="card w-full max-w-md animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="p-8">
        <div className="mb-4 flex justify-end">
          <div className="text-right">
            <p className="text-sm text-gray-500">Exclusive event</p>
            <p className="text-sm text-gray-500">Gourmet evening</p>
          </div>
        </div>

        <div
          className="mb-6 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-6xl font-bold text-gray-800">Fri</h2>
          <p className="text-8xl font-light text-gray-400">
            22<span className="text-4xl">nd</span>
          </p>
        </div>

        <div
          className="mb-6 animate-slide-up space-y-1"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-xl text-gray-700">20:00 PM</p>
          <p className="text-xl text-gray-700">Atrium Restaurant</p>
          <p className="text-xl text-gray-700">Elegant Stay Hotel</p>
        </div>

        <div
          className="mt-8 flex animate-slide-up items-center justify-between"
          style={{ animationDelay: '0.5s' }}
        >
          <button className="btn btn-primary flex items-center gap-2">
            Reserve <span className="ml-1">→</span>
          </button>
          <p className="text-sm text-gray-500">E.Stay</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
