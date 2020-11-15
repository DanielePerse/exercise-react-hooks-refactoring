// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Cars />
    </Provider>
  );
}

export default App;
