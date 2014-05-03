'use strict';

angular.module('dimrocApp')
  .directive('renderer', function () {
    return {
      restrict: 'A',
      template: '<canvas></canvas>',
      link: function (scope, elem, attrs) {
        if (!attrs.renderer) {
          return;
        }

        dimroc.gfx.renderSpinningCube(elem.find('canvas')[0]);
      }
    };
  });
