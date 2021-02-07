import React, { Component } from 'react';
import MovieCast from '../services/movies-api';
import s from './Cast.module.css';

export default class Cast extends Component { 
    state = {
        cast: [],
    };

    componentDidMount() {
        MovieCast.fetchMovieCast(this.props.match.params.movieId)
            .then(cast => this.setState(cast ));
            
    }

    render() {
        const { cast } = this.state;
        return (
            <>
               {cast && (
                     <ul>
                    {cast.map(({ id, profile_path, name, character }) => (
                        <li key={ id}>
                            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={ s.CastImg}/>
                            <h3>{ name}</h3>
                            <p>Character: { character}</p>
                        </li>
                    ))}   
                    </ul>
                )}
                </>
                 )
    }
};

