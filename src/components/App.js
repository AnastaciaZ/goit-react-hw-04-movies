import React, { Suspense, lazy}from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotFound from '../views/NotFound';
import routes from '../routes';


const HomePage = lazy(() => import('../views/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../views/MoviesPage.js' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(()=> import('../views/MovieDetailsPage.js' /* webpackChunkName: "movies-details-page" */));

const App = () => (
  <div>
   <Navigation/>
    <Suspense fallback={ <h1>Loading...</h1>}>
      <Switch>
      <Route path={ routes.home} exact component={HomePage} />
      <Route path={ routes.movies} exact component={MoviesPage} />
      <Route path={ routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
