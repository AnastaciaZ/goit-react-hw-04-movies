import React, { Component } from 'react';
import MovieReviews from '../services/movies-api';


export default class Reviews extends Component { 
    state = {
       results: [],
    };

    componentDidMount() { 
        MovieReviews.fetchMovieReviews(this.props.match.params.movieId)
        .then(results => this.setState(results ));
    }

    render() {
        const { results}= this.state;
        return (
            <>
                {results && (
                    <ul>
                        {results.map(({ id, author, content }) => (
                            <li key={id}>
                                <h3>{author}</h3>
                                <p>{ content}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {results.length === 0 &&
                    <p>We dont have any reviews for this movie</p>}
                </>
                )
    }

};