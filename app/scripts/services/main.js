'use strict';

angular.module('dimrocApp')
  .factory('ListService', function() {
    var ListService = {};
    var list = [];
    ListService.getItem = function(index) { return list[index]; };
    ListService.addItem = function(item) { list.push(item); };
    ListService.removeItem = function(item) { list.splice(list.indexOf(item), 1); };
    ListService.size = function() { return list.length; };

    return ListService;
  });
