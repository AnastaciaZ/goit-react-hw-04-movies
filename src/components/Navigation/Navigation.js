import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <>
  <ul className={s.Navigation}>
    <li>
      <NavLink
        exact
        to={ routes.home}
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}>
        Home
           </NavLink>
    </li>
    <li>
      <NavLink
        to={ routes.movies}
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}>
        Movies
           </NavLink>
    </li>
    </ul>
     <hr />
  </>
);

export default Navigation;