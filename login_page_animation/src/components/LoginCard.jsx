function LoginCard() {
  return (
    <div className="card w-full max-w-md animate-fade-in">
      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-700">Elegant Stay</h2>
          <button className="text-sm text-gray-500 transition-colors hover:text-gray-700">
            Sign up
          </button>
        </div>

        <h1
          className="mb-6 animate-slide-up text-4xl font-bold"
          style={{ animationDelay: '0.5s' }}
        >
          Log in
        </h1>

        <div className="space-y-4">
          <button
            className="flex w-full animate-slide-up items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-gray-50"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-xl text-blue-500">f</span>
            <span>Facebook</span>
          </button>

          <div
            className="relative animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="text-gray-500">@</span>
            </div>
            <input
              type="email"
              placeholder="e-mail address"
              className="input-field pl-10"
            />
          </div>

          <div
            className="relative animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="text-yellow-500">🔑</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input-field pl-10"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-sm text-gray-500 hover:text-gray-700">
              I forgot
            </button>
          </div>
        </div>

        <p
          className="mt-6 animate-slide-up text-xs text-gray-500"
          style={{ animationDelay: '0.5s' }}
        >
          By logging in, you agree to our terms and conditions. Your personal
          information is protected under our privacy policy. For assistance with
          your reservation, please contact our concierge.
        </p>

        <div
          className="mt-6 flex animate-slide-up items-center justify-between"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-sm text-gray-700">Welcome to refined luxury</p>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-gray-700">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
