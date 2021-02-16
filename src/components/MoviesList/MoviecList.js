import React from 'react';
import { Link } from 'react-router-dom';
import s from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ movies, homeLocation, moviesLocation }) => {
    return (
        <ul className={s.Container}>
            {movies.map(movie => (
                <li key={movie.id} className={s.MoviesList}>
                    {homeLocation && <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: homeLocation },
                    }}>
                        {movie.title}
                    </Link>}
                    {moviesLocation && <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: moviesLocation },
                    }}>
                        {movie.title}
                    </Link>}
                </li>
            ))}
        </ul>
    );
};
export default MoviesList;