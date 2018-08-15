'use strict';

angular.module('experimentsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = [
      { key: 'counting-crowds-coreml', title: 'Edge AI: Counting Crowds with CoreML', url: 'https://blog.dimroc.com/2018/08/12/counting-crowds-with-coreml/' },
      { key: 'counting-crowds', title: 'Counting Crowds and Lines', url: 'https://blog.dimroc.com/2017/11/19/counting-crowds-and-lines/' },
      { key: 'selfie-segmentation', title: 'Automatic Selfie Segmentation and Style Transfer', url: 'https://blog.dimroc.com/2017/04/25/machine-learning-selfies/' },
      { key: 'machine-learning-long-ids', title: 'Machine Learning Insurance Policy #s', url: 'https://blog.dimroc.com/2017/04/09/machine-learning-who-gave-you-that-long-id/' },
      { key: 'left-and-depth', title: 'Left and Depth Video', url: 'https://blog.dimroc.com/2017/02/03/video-depth-maps' },
      { key: 'machine-learning-hoods', title: 'Machine Learning Hoods', url: 'https://blog.dimroc.com/2016/01/13/machine-learning-neighborhoods/' },
      { key: 'twitter-beat-the-street', title: 'Twitter API to beat the (Wall) Street', url: 'https://blog.dimroc.com/2016/02/28/using-apis-to-beat-wallstreet-estimates/' },
      { key: 'urban-events', title: 'Cross City Search For Media', url: 'https://blog.dimroc.com/2015/12/29/search-across-cities/' },
      { key: 'snapshots', title: 'Tweets as Pixels', url: 'https://blog.dimroc.com/2014/09/24/tweets-as-pixels/' },
      { key: 'etl-language-showdown', title: 'ETL Language Showdown', url: 'https://blog.dimroc.com/2015/05/07/etl-language-showdown-pt2/' },
      { key: 'building_perimeters', title: 'NYC Building Perimeters in 3D', url: 'https://dimroc.github.io/nyc_building_perimeters/#/neighborhoods/lower-east-side' },
      { key: 'webgl', renderer: 'cube', title: 'WebGL with Three JS Slides', url: 'https://dimroc.github.io/reveal.js-threejs/' },
      { key: 'real-time-tweets', title: 'Real-Time Tweets from your Borough', url: 'https://github.com/dimroc/new_tweet_city' },
      { key: 'hoodfrequency', title: 'Hood Frequency - Terms by Neighborhood', url: 'https://dimroc.github.io/hoodFrequency' },
      { key: 'projectmonitor', title: 'iOS Project Monitor', url: 'https://github.com/dimroc/iOS.ProjectMonitor' },
      { key: 'manhattanforum', title: 'Manhattan Forum', url: 'https://github.com/dimroc/manhattan_forum' },
      //{ key: 'darkage', title: 'The Dark Ages (nothing got done, courtesy of a big tech company)', url: '#' },
      { key: 'sunborn', title: 'Terrain Rendering and Quad Trees', url: 'https://github.com/dimroc/sunborn_igf' },
      { key: 'globalization', title: 'Experimental Gameplay Project: Globalization', url: 'https://github.com/dimroc/globalization_egp' },
      { key: 'homeworkjunkie', title: 'Experimental Gameplay Project', url: 'https://github.com/dimroc/homeworkjunkie_egp' }
    ];

    $scope.firstProjects = $scope.projects.slice(0, 4);
    $scope.lastProjects = $scope.projects.slice(4);
});
