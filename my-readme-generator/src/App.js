import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ReadmeGenerator from './ReadmeGenerator';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/readme-generator" component={ReadmeGenerator} />
      </Switch>
    </Router>
  );
}

export default App;