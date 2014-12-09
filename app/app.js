(function () {
  'use strict';

  angular.module('myApp', [])
    .controller('Main',mainCtrl);

    function mainCtrl(){
      var main = this;
      main.hexes = hexes();
      main.hexNumber = hexNumber;
      main.translation = translation;
      function hexes(){
        var hexNumbers =[];
        for (var j=1;j<61;j++) {
          for (var i = 1; i < 56; i++) {
            hexNumbers.push([i,j]);}}
        return hexNumbers;
      }
      function hexNumber(hex){
        //takes a hex (pair of integers)and outputs a standard hex number
        var pad = function(num){
          return num.toString().length===1?'0'+num:num;
        };
        return pad(hex[0]).toString()+pad(hex[1]).toString();
      }
      function translation(hex){
        //takes a hex and gives a translation string for it's positioning in an SVG
        return (20+hex[0]*15)+","+(hex[0]%2?hex[1]*17.32-8.66+20:hex[1]*17.32+20);
      }
    }


})();
