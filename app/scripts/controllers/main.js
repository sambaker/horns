'use strict';

/**
 * @ngdoc function
 * @name hornsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hornsApp
 */
angular.module('hornsApp')
  .controller('MainCtrl', ['$scope', 'Key', 'Horn', function ($scope, Key, Horn) {

    $scope.keys = ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'C#', 'D#', 'F#', 'G#', 'A#'];
    $scope.scales = Key.scaleTypes();
    $scope.key = $scope.keys[0];
    $scope.scale = $scope.scales[0];

    function notesChanged() {
      var key = Key.key($scope.key)
      $scope.scaleNotes = Key.scale(key, $scope.scale);
      $scope.selections = Horn.createSelection($scope.scaleNotes);
      //console.log('scaleNotes',$scope.scaleNotes);
    }

    $scope.$watch('key', notesChanged);
    $scope.$watch('scale', notesChanged);

    $scope.hornDef = Horn.definition;

    // var Eb = Key.key('Eb');
    // var EbMajor = Key.scaleMajor(Eb);
    // var EbMinor = Key.scaleMinor(Eb);
    // console.log('Eb Major', EbMajor);
    // console.log('Eb Minor', EbMinor);

    // $scope.scaleNotes = EbMajor;

    // var G = Key.key('G');
    // var GMajor = Key.scaleMajor(G);
    // var GMinor = Key.scaleMinor(G);
    // console.log('G Major', GMajor);
    // console.log('G Minor', GMinor);

    // var F = Key.key('F');
    // var FMajor = Key.scaleMajor(F);
    // var FMinor = Key.scaleMinor(F);
    // console.log('F Major', FMajor);
    // console.log('F Minor', FMinor);
  }]);
