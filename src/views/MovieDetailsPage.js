import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MovieDetailsApi from '../services/movies-api';
import routes from '../routes';
import Cast from './Cast';
import Reviews from './Reviews';
import s from './MovieDetailsPage.module.css';

export default class MovieDetailsPage extends Component { 
    state = {
        movie: null
    };

    componentDidMount() { 
        MovieDetailsApi
            .fetchMovieDetails(this.props.match.params.movieId)
            .then(movie => this.setState({ movie })); 
    }

    handleGoBack = () => {
        const { state } = this.props.location;

        if (state && state.from) {
            return this.props.history.push(state.from);
        }
        
       this.props.history.push(routes.movies);
    };

    render() { 
        const {movie } = this.state;
        const { match } = this.props;
        return (
            <div className={s.Container}>
                <button type="button" onClick={this.handleGoBack}>Go back</button>
                {movie && (
                    <div>
                        <div className={s.MovieDetails}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={ s.MovieImg}/>
                            </div>
                            <div>
                                <h2>{movie.title} ({movie.release_date.slice(0,4)})</h2>  
                                <p>User score: {movie.vote_average}</p>
                                <h3>Overview:</h3>
                                <p>{movie.overview}</p>
                                <h3>Genres:</h3>
                                <ul className={ s.Genres}>
                                    {movie.genres.map(({ id, name }) => (
                                        <li key={id} className={ s.GenresItem}>{ name}</li> 
                                    ))}
                                </ul>
                            </div>
                       </div>
                       
                        <hr />
                            <p>Additional Information</p>
                            <ul>
                                <li className={s.Additional}>
                                <NavLink  to={{
                                                pathname: `${match.url}/cast`,
                                                state: { from: this.props.location },
                                }}>
                                    Cast
                                </NavLink>
                                </li>
                                <li className={s.Additional}>
                                <NavLink to={{
                                    pathname: `${match.url}/reviews`,
                                    state: { from: this.props.location },
                                }}>
                                    Reviews
                                </NavLink>
                                </li>
                                </ul>
                        <hr />   
                            <Route path={`${match.path}/cast`} component={Cast} />
                            <Route path={`${match.path}/reviews`} component={Reviews} />
                    </div>
                )}
            </div>
        );
        
    }
};
