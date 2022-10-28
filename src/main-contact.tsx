import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContact from './AppContact';

import initBootstrap from './bootstrap';

initBootstrap(true, true);

const e = React.createElement;

const domContainer = document.getElementById('app')!;
const root = ReactDOM.createRoot(domContainer);

root.render(e(AppContact));
