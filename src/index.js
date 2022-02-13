import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faCalendar);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);