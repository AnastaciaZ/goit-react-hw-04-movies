import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../utils/get-query-params';
import MoviesApi from '../services/movies-api';
import Searchbar from '../components/Searchbar/Searchbar';
import s from './MoviesPage.module.css';


export default class MoviesPage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() { 
        const { query } = getQueryParams(this.props.location.search);

        if (query) { 
            MoviesApi
                .fetchMoviesWithQuery(query)
                .then(movies => this.setState({ movies }));
        }
      
    }

    componentDidUpdate(prevProps, prevState) { 
        const { query: prevQuery} = getQueryParams(prevProps.location.search);
        const { query: nextQuery} = getQueryParams(this.props.location.search);
        
        if (prevQuery !== nextQuery) { 
            MoviesApi
                .fetchMoviesWithQuery(nextQuery)
                .then(movies => this.setState({ movies }));
        }
    }

    handleChangeQuery = query => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        });
    };

    render() {
        const { movies } = this.state;
        const { match } = this.props;
        
        return (
            <>
                <Searchbar onSubmit={ this.handleChangeQuery}/>
            
                {movies.length > 0 && (
                    <ul className={ s.Container}>
                    {movies.map(movie => (
                        <li key={movie.id} className={ s.MoviesList}>
                            <Link to={{
                                    pathname: `${match.url}/${movie.id}`,
                                    state: {from: this.props.location},
                                }}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}    
                    </ul>
                )}
            </>
        );
    }
};


