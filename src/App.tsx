//mporting the Bootstrap CSS
import './scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactForm from './Contact/Form';
import NavBar from './shared/components/Navbar';
import initBootstrap from './bootstrap';

initBootstrap(true, true);

const App = () => (
  <div>
    <NavBar />
    <br />
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-6 align-self-center'>
          <h1>Hello World.</h1>
        </div>
      </div>
    </div>
  </div>
);

export default App;
