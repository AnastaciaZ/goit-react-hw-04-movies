const baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'b325d644708c874cf6e0fe53c31771e4';

//популярные фильмы
const fetchMoviesTrending = () => {
    return fetch(`${baseURL}/trending/movie/day?api_key=${apiKey}`)
        .then(response => response.json())
        .then(({ results }) => { return results; });
};

//полная информация о фильме
const fetchMovieDetails = movieId => {
    return fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        .then(response => response.json());
};

//актерский состав
const fetchMovieCast = movieId => { 
    return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
        .then(response => response.json());
}

//обзор фильма
const fetchMovieReviews = movieId => {
    return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json());
};

//поиск фильма по слову
const fetchMoviesWithQuery = searchQuery => {
    return fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(({ results }) => { return results; });    
};

const api = {
    fetchMoviesTrending, fetchMovieDetails, fetchMovieCast, fetchMovieReviews, fetchMoviesWithQuery,
};

export default api;