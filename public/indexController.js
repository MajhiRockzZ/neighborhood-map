(function () {
  'use strict';
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
      .catch(function (error) {
        console.log("Registration failed:", error);
      });
  }
})();
