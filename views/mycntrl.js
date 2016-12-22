angular.module('HelloWorldApp', [])
        .controller('HelloWorldController', function ($scope) {
    $this.sendmail=function(){
        alert($scope.mail.to);
    }
    
    
});