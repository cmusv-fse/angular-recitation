"use strict";
angular.module("fse-recitation")
.controller("directivesController", function($scope) {
	$scope.names = ['Jani','Hege','Kai'];
	$scope.showAlert = false;
	$scope.toggleShowAlert = () => {
		$scope.showAlert = !$scope.showAlert;
	}
});
