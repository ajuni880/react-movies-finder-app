import React from 'react';

const Movie = ({ movie }) => {
    return (
        movie && Boolean(movie.Response) ? (
            <article className="movie">
                <figure className="movie__poster">
                    <img src={movie.Poster} alt={movie.Title} />
                </figure>
                <div className="movie__details">
                    <h3>{movie.Title}</h3>
                    <div className="movie__items">
                        <span>{movie.Runtime}</span>
                        <span>Rating: {movie.imdbRating}</span> 
                        <span>Genre: {movie.Genre}</span>
                    </div>
                    <p>{movie.Plot}</p>
                    <p>Stars: {movie.Actors}</p>
                </div>
            </article>
        ) : <p>{movie && movie.Error}</p>
    );
}
export default Movie;