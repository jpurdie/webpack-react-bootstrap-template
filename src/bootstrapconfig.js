import { Tooltip, Toast, Popover } from 'bootstrap';

/*
  Taken from: https://github.com/noreading/bootstrap5-webpack-boilerplate
*/
export default function initBootstrap(config) {
  // Enabling tooltips
  if (config.tooltip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl, { container: 'body' })
    );
  }

  // Enabling popovers
  if (config.popover) {
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map((popoverTriggerEl) => new Popover(popoverTriggerEl));
  }

  // Enabling toasts
  if (config.toasts) {
    const toastTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));
    console.log('toastTriggerList', toastTriggerList);
    toastTriggerList.map((toastTriggerEl) => {
      // Define the target property
      let toastTarget = null;
      if (toastTriggerEl.nodeName === 'A') {
        toastTarget = toastTriggerEl.href || null;
        if (toastTarget.includes('#')) {
          toastTarget = `#${toastTarget.split('#').pop()}`;
        } else {
          return false;
        }
      } else if (toastTriggerEl.nodeName === 'BUTTON') {
        toastTarget = toastTriggerEl.dataset.bsTarget || null;
      }
      // Check if the target exists
      const toastTargetEl = document.querySelector(toastTarget);

      if (!toastTargetEl) {
        return false;
      }

      // Init toast
      const toast = new Toast(toastTargetEl);

      // Add click even to trigger
      toastTriggerEl.addEventListener('click', (event) => {
        event.preventDefault();
        toast.show();
      });
      return false;
    });
  }
}
