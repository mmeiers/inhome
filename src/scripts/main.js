/* global RiseVision */
(function () {
  "use strict";

  window.addEventListener("WebComponentsReady", function() {
    RiseVision.Directory.init();
    RiseVision.Grocery.init();
    RiseVision.Todo.init();
  });
})();