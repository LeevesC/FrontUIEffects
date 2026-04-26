import { useState } from 'react';
import LoginCard from './components/LoginCard';
import EventCard from './components/EventCard';
import NewsCard from './components/NewsCard';

function App() {
  const [key, setKey] = useState(0);
  return (
    <>
      <button
        onClick={() => setKey((prev) => prev + 1)}
        className="fixed right-4 top-4 z-50 rounded bg-blue-500 p-2 text-white"
      >
        Replay Animations
      </button>
      <div
        key={key}
        className="flex min-h-screen w-screen flex-col content-stretch items-center justify-center gap-6 bg-cover bg-center p-6 bg-blend-overlay md:flex-row"
        style={{
          backgroundImage: `linear-gradient(rgba(83, 83, 78, 1), rgba(0, 0, 0, 0.3)), url('/src/image/bg.jpg')`,
        }}
      >
        <LoginCard />
        <EventCard />
        <NewsCard />
      </div>
    </>
  );
}

export default App;
