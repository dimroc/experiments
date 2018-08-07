'use strict';

angular.module('dimrocApp')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        switch (attrs.renderer) {
          case 'cube':
            elem.append('<canvas></canvas>');
            dimroc.gfx.renderSpinningCube(elem.find('canvas')[0]);
            break;
          default:
            return;
        }
      }
    };
  });
