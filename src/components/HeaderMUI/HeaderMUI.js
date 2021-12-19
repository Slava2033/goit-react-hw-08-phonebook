import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import Navigation from './NavigationMUI';
import AuthNav from './AuthNavMUI';
import UserMenu from './UserMenuMUI';
import { authSelectors } from 'redux/auth';

export default function HeaderMUI() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <Navigation />
          </Grid>

          {isLoggedIn ? (
            <Grid item>
              <UserMenu />
            </Grid>
          ) : (
            <Grid item>
              <AuthNav />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
