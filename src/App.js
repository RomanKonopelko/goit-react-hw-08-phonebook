import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Contacts/Container';
import AppBar from './Components/NavBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';
import Loader from './Components/Loader/Loader';

const HomeView = lazy(() => import('./Views/HomeView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const ContactsView = lazy(() => import('./Views/ContactsView'));
const RegisterView = lazy(() => import('./Views/RegisterView'));
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              component={RegisterView}
              restricted
              redirectTo="/contacts"
            />
            <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
            <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login" />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
