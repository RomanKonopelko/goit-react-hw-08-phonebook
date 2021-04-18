import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import ContactsView from './Views/ContactsView';

const App = () => (
  <Container>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
  </Container>
);

export default App;
