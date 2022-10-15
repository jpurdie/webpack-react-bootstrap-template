import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import initBootstrap from './bootstrapconfig';

initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

console.log('App Initiated.');

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

document.getElementById('navbar-brand').innerHTML = 'Foobars';
