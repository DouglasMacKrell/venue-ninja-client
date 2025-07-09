// src/components/VenueCard.jsx
import { Link } from 'react-router-dom';

function VenueCard({ venue }) {
  return (
    <Link
      to={`/venues/${venue.id}`}
      className="block bg-gray-800 p-6 rounded-lg shadow-md 
                 hover:bg-gray-700 hover:shadow-lg hover:border 
                 hover:border-indigo-500 transition-all duration-200 
                 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label={`View details for ${venue.name}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-400">
          {venue.name}
        </h2>
        <span className="text-lg sm:text-xl">🥷</span>
      </div>
      <p className="text-xs text-gray-400 tracking-wide">ID: {venue.id}</p>
    </Link>
  );
}

export default VenueCard;
