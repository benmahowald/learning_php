console.log('srced');

var myApp = angular.module('myApp', []);

myApp.controller('authCtrl', ['$scope', '$http', function($scope, $http){
  console.log('in authCtrl');
}]);
