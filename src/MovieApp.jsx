import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const moviesData = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller",
    posterURL: "https://via.placeholder.com/150",
    rating: 9,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A space exploration journey",
    posterURL: "https://via.placeholder.com/150",
    rating: 8.5,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
];

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border p-4 rounded cursor-pointer hover:bg-gray-100"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-600">Rating: {movie.rating}</p>
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const Filter = ({ setFilter }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search by title"
        className="border p-2"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Min rating"
        className="border p-2"
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, rating: e.target.value }))
        }
      />
    </div>
  );
};

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find((m) => m.id === parseInt(id));

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

const AddMovie = ({ setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    trailerLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, { ...newMovie, id: prev.length + 1 }]);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 mb-2"
        onChange={(e) =>
          setNewMovie((prev) => ({ ...prev, title: e.target.value }))
        }
        required
      />
      <input
        type="text"
        placeholder="Description"
        className="border p-2 mb-2"
        onChange={(e) =>
          setNewMovie((prev) => ({ ...prev, description: e.target.value }))
        }
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        className="border p-2 mb-2"
        onChange={(e) =>
          setNewMovie((prev) => ({ ...prev, posterURL: e.target.value }))
        }
        required
      />
      <input
        type="number"
        placeholder="Rating"
        className="border p-2 mb-2"
        onChange={(e) =>
          setNewMovie((prev) => ({ ...prev, rating: e.target.value }))
        }
        required
      />
      <input
        type="text"
        placeholder="Trailer Link"
        className="border p-2 mb-2"
        onChange={(e) =>
          setNewMovie((prev) => ({ ...prev, trailerLink: e.target.value }))
        }
        required
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Add Movie
      </button>
    </form>
  );
};

const App2 = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-6">
              <AddMovie setMovies={setMovies} />
              <Filter setFilter={setFilter} />
              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App2;
