import React from 'react';
import Dashboard from './views/dashboard/dashboard';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/dashboard" component={Dashboard}/>
      </Router>     
    </div>
  );
}

export default App;
