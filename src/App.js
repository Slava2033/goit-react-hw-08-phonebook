import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import HeaderMUI from './components/HeaderMUI/HeaderMUI';
import BottomAppBar from './components/Footer/BottomAppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#011211',
    },
    secondary: {
      main: '#faa346',
    },
  },
});

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <ClockLoader css={override} color={'#e8834d'} size={150} />
      ) : (
        <ThemeProvider theme={theme}>
          <HeaderMUI />
          <Switch>
            <Suspense
              fallback={
                <ClockLoader css={override} color={'#e8834d'} size={150} />
              }
            >
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                redirectTo="/"
                restricted
              />
              <PublicRoute
                path="/login"
                component={LoginView}
                redirectTo="/"
                restricted
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Suspense>
          </Switch>
          <BottomAppBar />
        </ThemeProvider>
      )}
    </Container>
  );
}
