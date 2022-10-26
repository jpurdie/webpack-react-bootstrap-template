// Importing the Bootstrap CSS
import './scss/app.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactForm from './Contact/Form';
import NavBar from './shared/components/Navbar';
import Bootstrap from './bootstrap';

const App = () => (
  <div>
    <NavBar />
    <br />
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-6 align-self-center'>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
);

const e = React.createElement;

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

root.render(e(App));
