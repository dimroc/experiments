'use strict';

angular.module('dimrocApp')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        switch (attrs.renderer) {
          case 'cube':
            var dom = elem.append('<canvas></canvas>');
            dimroc.gfx.renderSpinningCube(dom[0].firstChild);
            break;
          default:
            return;
        }
      }
    };
  });
