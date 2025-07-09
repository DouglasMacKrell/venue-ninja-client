import { useEffect, useState } from 'react';
import axios from 'axios';
import VenueCard from './components/VenueCard';

function App() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://venue-ninja.onrender.com/venues')
      .then((response) => {
        setVenues(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching venues:', err);
        setError('Failed to fetch venues.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">🥷 Venue Ninja</h1>
        <p className="text-lg">Seat recommendations for epic venues.</p>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-400 text-center">{error}</p>}

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}

export default App;
