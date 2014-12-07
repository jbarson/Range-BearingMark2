(function () {
  'use strict';

  angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ]).controller('Main',function(){
      var main = this;
      main.hexes =[];
      for (var j=0;j<50;j++) {
        for (var i = 0; i < 50; i++) {
          main.hexes.push([i,j]);
        }
      }
    })

})();
