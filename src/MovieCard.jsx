<<<<<<< HEAD
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <img
          src={movie.image !== 'N/A' ? movie.image : 'https://via.placeholder.com/400'}
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.description
      }</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
=======
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>
      <div>
        <img
          src={movie.image !== 'N/A' ? movie.image : 'https://via.placeholder.com/400'}
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.description
      }</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
>>>>>>> f2a7ab29ac74eb639f5e6fb9589b53a8426e753b
