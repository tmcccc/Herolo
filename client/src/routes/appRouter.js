import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMessage from '../components/AddMessage';
import GetMessages from '../components/getMeesages/GetMessages';
import Welcome from '../components/Welcome';
import NavBar from '../components/NavBar';
import './../css/appRouter.css';
const AppRouter = () => (
  <BrowserRouter>
    <>
      <NavBar />

      <section className="container">
        <Switch>
          <Route path="/" component={Welcome} exact={true} />
          <Route path="/addMessage" component={AddMessage} />
          <Route path="/" component={GetMessages} />
        </Switch>
      </section>
    </>
  </BrowserRouter>
);

export default AppRouter;
