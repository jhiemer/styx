/**
 * RegisterController
 **/


angular.module('controllers')
  .controller('registerController',
    function RegisterController($scope, $state, $http, responseService, REST_API) {
      $scope.state = $state;

      $scope.register = function(userForm) {
        var head = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Accept': 'application/json;charset=utf-8'
          }
        };
        var data = $.param({
          'username': userForm.email,
          'firstName': userForm.firstName,
          'lastName': userForm.lastName,
          'password': userForm.password
        });


        $http.post(REST_API + '/users', data, head).success(function(data, status, headers, config) {
          responseService.executeSuccess(data, headers, 'dashboard');
        }).error(function(data, status, headers, config) {
          responseService.executeError(data, status, headers, $scope, 'user');
        });
      };

      return RegisterController;
    });