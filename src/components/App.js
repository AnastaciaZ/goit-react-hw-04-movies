import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import NotFound from '../views/NotFound';
import routes from '../routes';

const App = () => (
  <div>
   <Navigation/>

      <Switch>
      <Route path={ routes.home} exact component={HomePage} />
      <Route path={ routes.movies} exact component={MoviesPage} />
      <Route path={ routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
  </div>
);

export default App;
