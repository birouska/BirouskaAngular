var app = angular.module("MyApp", []);

var user = {};

app.controller("MyCtrl", function($scope, $http) {
	
	$scope.submit = function() {
		//$scope.visible = !$scope.visible;
		//alert("Oia Submit");
		
		if($scope.password != $scope.confirmPassword)
			alert("senhas diferentes!");
		else
			{
				$scope.user.password = $scope.password;
				
				$http.post("http://localhost:8080/BirouskaApi/v1/users/add", $scope.user).
			    success(function(data, status, headers, config) {
			        // this callback will be called asynchronously
			        // when the response is available
			        console.log(data);
			      }).
			      error(function(data, status, headers, config) {
			        // called asynchronously if an error occurs
			        // or server returns response with an error status.
			      });
			}
			
		};
		
	 
	
});

app.controller("MyNestedCtrl", function($scope) {

});