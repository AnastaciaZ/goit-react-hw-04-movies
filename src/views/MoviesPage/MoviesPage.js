import React, { Component} from 'react';
import getQueryParams from '../../utils/get-query-params';
import MoviesApi from '../../services/movies-api';
import Searchbar from '../../components/Searchbar/Searchbar';
import MoviesList from '../../components/MoviesList/MoviecList';
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
                .then(movies => this.setState({ movies }))
                .catch(error => this.setState({error}));
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
        const moviesLocation = this.props.location;
        
        return (
            <div className={ s.Container}>
                <Searchbar onSubmit={ this.handleChangeQuery}/>
            
                {movies.length > 0 && (
                    <MoviesList movies={movies}
                        moviesLocation={ moviesLocation}/>
                )}
            </div>
        );
    }
};


