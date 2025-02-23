import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
  // Default value set to []
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p className="text-gray-500">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
