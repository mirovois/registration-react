import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {TeamContextProvider} from './context'
import App from './App';



ReactDOM.render(
  <TeamContextProvider>
    <App />
  </TeamContextProvider>,
  document.getElementById('root')
);


