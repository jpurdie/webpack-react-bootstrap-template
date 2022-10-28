import * as bootstrap from 'bootstrap';

export default function (enableToolTip: boolean) {
  // Enabling tooltips
  if (enableToolTip) {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
