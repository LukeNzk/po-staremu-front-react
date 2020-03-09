import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import routes from './components/Routes.js'
import Footer from './components/Footer'
import Calendar from './components/Calendar'

function Header() {
  return (
      <header className="business-header"></header>
  );
}

function App() {
  const subpages = Object.keys(routes).map(function(route) {
    const current = routes[route];
    return (
        <Route path={current.url}>{current.page}</Route>
    );
  });

  return (
    <div>
      <Header/>
      <Router>
        {/* <MainMenu/> */}
        <Switch>
          {subpages}
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
