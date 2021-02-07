import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import MoviesTrending from '../services/movies-api';

import s from './HomePage.module.css';


export default class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() { 
        MoviesTrending.fetchMoviesTrending()
         .then(movies => this.setState({ movies }))
    }

    render() {
        const { movies } = this.state;
        
        return (
            <div className={ s.Container}>
                <h1>Trending today</h1>
                {movies.length > 0 && (
                     <ul>
                        {movies.map(movie => (
                            <li key={movie.id} className={s.MoviesList}>
                                <Link to={{
                                    pathname: `/movies/${movie.id}`,
                                    state: { from: this.props.location },
                                    }}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
};
