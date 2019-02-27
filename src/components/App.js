import React from 'react';
// React Router
import { Switch, Route } from 'react-router-dom';

import Layout from './shared/Layout/Layout';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <Layout>
      <div className="app">
        {/* Dynamic Content Area */}
        <div className="main-content mt-4">
          <Switch>
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/'} component={Home} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};

export default App;
