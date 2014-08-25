'use strict';

/**
 * @ngdoc function
 * @name hornsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hornsApp
 */
angular.module('hornsApp')
  .controller('MainCtrl', ['$scope', '$location', '$routeParams', 'Key', 'Horn', function ($scope, $location, $routeParams, Key, Horn) {

    $scope.instruments = Horn.getInstruments();
    if ($scope.instruments.indexOf($routeParams.instrument) >= 0) {
      $scope.instrument = $routeParams.instrument;
    } else {
      $scope.instrument = 'trombone';
    }

    if ($scope.instrument === 'trumpet') {
      $scope.keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C#', 'D#', 'F#', 'G#', 'A#'];
    } else {
      $scope.keys = ['Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'C#', 'D#', 'F#', 'G#', 'A#'];
    }
    $scope.scales = Key.scaleTypes();

    if ($scope.keys.indexOf($routeParams.key) >= 0) {
      $scope.key = $routeParams.key;
    } else {
      $scope.key = $scope.keys[0];
    }

    if ($scope.scales.indexOf($routeParams.scale) >= 0) {
      $scope.scale = $routeParams.scale;
    } else {
      $scope.scale = $scope.scales[0];
    }

    console.log("routeParams are",$routeParams);
    function paramsChanged() {
      $location.path("/" + $scope.instrument + "/" + $scope.key + "/" + $scope.scale);
      //console.log('scaleNotes',$scope.scaleNotes);
    }
    var key = Key.key($scope.key)
    $scope.scaleNotes = Key.scale(key, $scope.scale);
    $scope.selections = Horn.createSelection($scope.instrument, $scope.scaleNotes);

    $scope.$watch('key', paramsChanged);
    $scope.$watch('scale', paramsChanged);
  
    $scope.$watch('instrument', function(newInstrument, oldInstrument) {
      if (newInstrument && oldInstrument && newInstrument !== oldInstrument) {
        // TODO: Transpose selected key
        console.log("TODO: Transpose selected key to new instrument")
      }
      paramsChanged();
    });

    $scope.$watch('instrument', function(instrument) {
      $scope.hornDef = Horn.instruments[instrument];
      console.log("HORNDEF", $scope.hornDef);
    });

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
