import React, { Component} from 'react';
import MoviesTrending from '../../services/movies-api';
import MoviesList from '../../components/MoviesList/MoviecList';
import s from './HomePage.module.css';


export default class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() { 
        MoviesTrending.fetchMoviesTrending()
            .then(movies => this.setState({ movies }))
            .catch(error => this.setState({error}));
    }

    render() {
        const { movies } = this.state;
        const homeLocation = this.props.location;
        return (
            <div className={ s.Container}>
                <h1>Trending today</h1>
                {movies.length > 0 && (
                    <MoviesList movies={movies}
                        homeLocation={ homeLocation}/>
                )}
            </div>
        );
    }
};
