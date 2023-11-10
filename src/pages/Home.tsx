import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 "></div>

      <img
        src="home.jpeg"
        alt="Hero Image"
        className="h-auto w-screen max-h-screen"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="text-lg mt-4">Explore and discover amazing content.</p>
      </div>
    </div>
  );
};

export default Home;
