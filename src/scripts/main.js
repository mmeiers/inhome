"use strict";

$(function() {

  $("#keyboard").makeKeyboard();

  //inject the SVG elements
  new SVGInjector().inject(document.querySelectorAll('svg[data-src]'));

});