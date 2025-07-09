import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function VenuePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
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

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-400 text-center">{error}</p>;

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <ul className="space-y-4">
        {data.recommendations.map((rec, i) => (
          <li key={i} className="bg-gray-800 p-4 rounded">
            <p><strong>Section:</strong> {rec.section}</p>
            <p><strong>Category:</strong> {rec.category}</p>
            <p><strong>Price:</strong> {rec.estimated_price}</p>
            <p><strong>Reason:</strong> {rec.reason}</p>
            {rec.tip && <p className="italic text-yellow-300">Tip: {rec.tip}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenuePage;
