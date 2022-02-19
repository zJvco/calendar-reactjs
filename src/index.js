import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faCalendar,
  faArrowRight,
  faPen,
  faClock,
  faRepeat,
  faList
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faPlus,
  faCalendar,
  faArrowRight,
  faPen,
  faClock,
  faRepeat,
  faList
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);