import React from 'react';
import Navigation from './containers/navigation'
import Main from './containers/main'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main />
      </header>
    </div>
  );
}

export default App;
