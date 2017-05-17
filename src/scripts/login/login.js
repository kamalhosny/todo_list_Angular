angular.module('toDoApp').controller('loginController', function ($scope, $http ,$auth) {
  $scope.user=[]
  $auth.validateUser().then(
    function(resp){
      $scope.user=resp;
      console.log(resp)
    }
  )
  $scope.authenticationProcess = function(){
    $auth.submitLogin($scope.loginForm)
    .then(function(resp){
      // $scope.signedIn=true;
      $scope.user=resp;
    }).catch(function(resp){
    });
  }
  $scope.registerUser = function(){
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp){

        }).catch(function(resp){

        });
      };
  $scope.logOutUser = function(){
      $auth.signOut()
        .then(function(resp){
          // $scope.signedIn=false;
            $scope.user=[];
        }).catch(function(resp){

        });
      };

});

angular.module('toDoApp').run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);
