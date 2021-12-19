import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 900,
    fontSize: 18,
    color: '#faa346',
  },
  activeLink: {
    color: '#ffffff',
    fontSize: '25px',
  },
};

export default function NavigationMUI() {
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Контакты
      </NavLink>
    </nav>
  );
}
