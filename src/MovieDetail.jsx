import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="p-6">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="text-lg">{movie.description}</p>
      <div className="mt-4">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Movie Trailer"
          allowFullScreen
          className="rounded shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
