import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes'
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="links" >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
