'use strict';

angular.module('dimrocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
      { key: 'real-time-tweets', title: 'Real-Time Tweets from your Borough', url: 'http://newtweetcity.herokuapp.com/boroughs/manhattan' },
      { key: 'snapshots', title: 'Tweets as Pixels', url: 'http://newtweetcity.herokuapp.com/manhattan/snapshots/last' },
      { key: 'building_perimeters', title: 'NYC Building Perimeters in 3D', url: 'http://dimroc.github.io/nyc_building_perimeters/#/neighborhoods/lower-east-side' },
      { key: 'webgl', renderer: 'cube', title: 'WebGL with Three JS Slides', url: 'http://dimroc.github.io/reveal.js-threejs/' },
      { key: 'hoodfrequency', title: 'Hood Frequency - Terms by Neighborhood', url: 'https://dimroc.github.io/hoodFrequency' },
      { key: 'projectmonitor', title: 'iOS Project Monitor', url: 'https://github.com/dimroc/iOS.ProjectMonitor' },
      { key: 'manhattanforum', title: 'Manhattan Forum', url: 'https://github.com/dimroc/manhattan_forum' },
      { key: 'sunborn', title: 'Terrain Rending and Quad Trees', url: 'https://github.com/dimroc/sunborn_igf' }
    ];
  });
