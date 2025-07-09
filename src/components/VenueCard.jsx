import { Link } from 'react-router-dom';

function VenueCard({ venue }) {
  return (
    <Link to={`/venues/${venue.id}`} className="block bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
      <h2 className="text-2xl font-semibold mb-2">{venue.name}</h2>
      <p className="text-sm text-gray-400">ID: {venue.id}</p>
    </Link>
  );
}

export default VenueCard;
