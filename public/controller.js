var myApp = angular.module('myApp', []);

function mainController($scope, $http) {

	$scope.formData = {userName: ''};

	$http.get('/api/users').success(function(data) {
		$scope.users = data;
	});

	$scope.createUser = function() {
		$http.post('/api/users', $scope.formData)
		
		$http.get('/api/users').success(function(data) {
			$scope.users = data;
		});
	};

	$scope.updateUser = function(id) {
		$scope.newName = prompt("Please enter your new User Name: ", "");
		$http.put('/api/users/' + id, {userName: $scope.newName}).success(function(data) {
			$scope.users = data;
		});

		$http.get('/api/users').success(function(data) {
			$scope.users = data;
		});

	};

	$scope.deleteUser = function(id) {
		$http.delete('/api/users/' + id).success(function() {
			$http.get('/api/users').success(function(data) {
				$scope.users = data;
			});
		});
	};
}