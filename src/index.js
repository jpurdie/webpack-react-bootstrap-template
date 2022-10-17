// Importing the Bootstrap CSS
import './scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import CountButton from './CountButton';

const e = React.createElement;

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(e(CountButton));
