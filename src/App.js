import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  const subpages = Object.keys(routes).map(function(route) {
    const current = routes[route];
    return (
        <Route path={current.url}>{current.page}</Route>
    );
  });

  function Header() {
    return (
        <header class="business-header"></header>
    );
  }

  return (
    <div>
      <Header/>
      <Router>
        <MainMenu/>
        <Switch>
          {subpages}
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
