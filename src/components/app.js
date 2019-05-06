import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import './app.css';

const App = () => (
  <div className="container">
    <header>
      <h1>Reminders App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>      
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
