import './scss/app.scss';
import { createApp } from 'vue/dist/vue.esm-bundler';
import initBootstrap from './bootstrapconfig';

initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

console.log('App Initiated');

createApp({
  data() {
    return {
      email: '',
    };
  },
}).mount('#app');
