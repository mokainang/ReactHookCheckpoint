import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-64 cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="mt-2 font-semibold">⭐ {movie.rating}/5</p>
    </div>
  );
};

export default MovieCard;

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-64">
//       <img
//         src={movie.posterURL}
//         alt={movie.title}
//         className="w-full h-40 object-cover rounded-lg"
//       />
//       <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
//       <p className="text-sm text-gray-600">{movie.description}</p>
//       <p className="mt-2 font-semibold">⭐ {movie.rating}/5</p>
//     </div>
//   );
// };

// export default MovieCard;
