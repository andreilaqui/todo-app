import React from 'react'
// 🚦 React Router
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="flex flex-col bg-gray-500 items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Stay Organized. Stay Focused.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        Welcome to your personal task manager — built for clarity, speed, and simplicity.
      </p>
      <Link
        to="/todo"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        View My Tasks
      </Link>
    </section>
  );

}

export default Home