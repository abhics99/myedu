use 'strict';
angular.module('HelloWorldApp', [])
        .controller('HelloWorldController', function ($scope) {
    $scope.sendmail=function(){
        $http({
  method: 'POST',
  url: '/'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    }
    
    
});