(function () {
  'use strict';
  // Check for browser support of service worker
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        // Successful registration
        console.log('Hooray. Registration successful, scope is:', registration.scope);
      })
      .catch(function (error) {
        // Failed registration, service worker won’t be installed
        console.log('Whoops. Service worker registration failed, error:', error);
      });
  }
})();
