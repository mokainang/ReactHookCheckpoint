const Filter = ({ searchTerm, setSearchTerm, rating, setRating }) => {
  return (
    <div className="flex gap-4 mb-4">
      {/* Filter by Title */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-2xl"
      />

      {/* Filter by Rating */}
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded-2xl"
      >
        <option value="">All Ratings</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} ⭐
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
