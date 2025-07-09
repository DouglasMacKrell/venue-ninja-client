import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6 text-center">You’ve ventured into the void. This page doesn’t exist.</p>
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition"
      >
        Return to Safety
      </Link>
    </div>
  );
}

export default NotFound;
