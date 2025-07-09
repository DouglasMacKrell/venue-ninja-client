import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function VenuePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://venue-ninja.onrender.com/venues/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch venue details.');
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!data) return;

    const fetchImage = async () => {
      setImageLoading(true);
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const defaultImageUrl = 'https://images.unsplash.com/photo-1514813593393-278150499878?w=800&q=80';

      try {
        let response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: `${data.name} stadium`, per_page: 1, orientation: 'landscape' },
          headers: { Authorization: `Client-ID ${accessKey}` },
        });

        if (response.data.results.length === 0) {
          response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: 'stadium', per_page: 1, orientation: 'landscape' },
            headers: { Authorization: `Client-ID ${accessKey}` },
          });
        }

        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.regular);
        } else {
          setImageUrl(defaultImageUrl);
        }
      } catch (err) {
        console.error('Error fetching image from Unsplash:', err);
        setImageUrl(defaultImageUrl);
      } finally {
        setImageLoading(false);
      }
    };

    fetchImage();
  }, [data]);

  const formatPrice = (price) =>
    price && price.trim() !== '' ? price : '—';

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-red-400 text-center mt-8">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 🔥 Venue Image Banner */}
        {imageLoading ? (
          <div className="w-full h-64 bg-gray-700 rounded-lg shadow-md mb-6 flex items-center justify-center">
            <p>Loading venue image...</p>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={data ? `${data.name} photo` : 'Venue photo'}
            className="rounded-lg shadow-md mb-6 w-full h-64 object-cover"
          />
        )}


        <h1 className="text-4xl font-bold mb-2 text-center">{data.name}</h1>
        <p className="text-center mb-8 text-gray-300">
          Smart seat picks for every budget and vibe.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {data.recommendations.map((rec, i) => (
            <div
              key={i}
              className="bg-gray-800 hover:bg-gray-700 transition-colors p-5 rounded-lg shadow-md relative"
            >
              {/* 🥇 Top Pick Badge */}
              {i === 0 && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  Top Pick
                </span>
              )}
              <p><strong>Section:</strong> {rec.section}</p>
              <p><strong>Category:</strong> {rec.category}</p>
              <p><strong>Price:</strong> {formatPrice(rec.estimatedPrice)}</p>
              <p><strong>Reason:</strong> {rec.reason}</p>
              {rec.tip && (
                <p className="italic text-yellow-300 mt-2">Tip: {rec.tip}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VenuePage;
