'use strict';

angular.module('dimrocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
      { key: 'machine-learning-long-ids', title: 'Machine Learning Long Ids', url: 'http://blog.dimroc.com/2017/04/09/machine-learning-who-gave-you-that-long-id/' },
      { key: 'left-and-depth', title: 'Left and Depth Video', url: 'http://blog.dimroc.com/2017/02/03/video-depth-maps' },
      { key: 'machine-learning-hoods', title: 'Machine Learning Hoods', url: 'http://machinelearninghoods.dimroc.com' },
      { key: 'urban-events', title: 'Cross City Search For Media', url: 'http://blog.dimroc.com/2015/12/29/search-across-cities/' },
      { key: 'real-time-tweets', title: 'Real-Time Tweets from your Borough', url: 'https://github.com/dimroc/new_tweet_city' },
      { key: 'snapshots', title: 'Tweets as Pixels', url: 'http://blog.dimroc.com/2014/09/24/tweets-as-pixels/' },
      { key: 'building_perimeters', title: 'NYC Building Perimeters in 3D', url: 'http://dimroc.github.io/nyc_building_perimeters/#/neighborhoods/lower-east-side' },
      { key: 'webgl', renderer: 'cube', title: 'WebGL with Three JS Slides', url: 'http://dimroc.github.io/reveal.js-threejs/' },
      { key: 'hoodfrequency', title: 'Hood Frequency - Terms by Neighborhood', url: 'https://dimroc.github.io/hoodFrequency' },
      { key: 'projectmonitor', title: 'iOS Project Monitor', url: 'https://github.com/dimroc/iOS.ProjectMonitor' },
      { key: 'manhattanforum', title: 'Manhattan Forum', url: 'https://github.com/dimroc/manhattan_forum' },
      { key: 'sunborn', title: 'Terrain Rendering and Quad Trees', url: 'https://github.com/dimroc/sunborn_igf' },
      { key: 'homeworkjunkie', title: 'Experimental Gameplay Project', url: 'https://github.com/dimroc/homeworkjunkie_egp' }
    ];
  });
