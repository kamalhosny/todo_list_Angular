var app =angular.module('toDoApp', ['ngRoute','ng-token-auth','ipCookie']);

app.config(
  function ($authProvider,$routeProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
  $routeProvider
    .when('/', {
      templateUrl: 'views/todos/todos.html',
      controller: 'AppController'
    }).when('/sign_up', {
      templateUrl: 'views/user_sessions/register.html',
      controller: 'loginController'
    })
  }
);

// .when('/sign_in', {
//   templateUrl: 'views/user_sessions/new.html',
//   controller: 'loginController'
// }).when('/sign_out', {
//   templateUrl: 'views/user_sessions/new.html',
//   controller: 'loginController'
// })
