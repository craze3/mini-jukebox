//******************************************************************************/
/*
/*						RockBot App (Seena Remix)
/*								12/04/2018
/*	   				By: Seena Zandipour (craze3@gmail.com)
/*
//******************************************************************************/

var app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

//******************************************************************************/
// API Polling Service
//******************************************************************************/
.factory('Poller', ['$http', '$timeout', function($http, $timeout) {
	var data = {};

	// Main polling function:
	function poller(success) {
		$http.get('https://api.rockbot.com/v2/venue/10').then(function(responseData) {
			data = responseData.data;
			success(data);
			// Poll again in 30 seconds:
			$timeout(function() {
				poller(success);
			}, 30000);
		}).catch(function(err) {});
	};

	return {
		poller: poller
	};
}])

//******************************************************************************/
// Main Controller
//******************************************************************************/
.controller('AppCtrl', ['$scope', 'Poller', function($scope, Poller) {
	$scope.page = 1;

	// Call the API polling service:
	Poller.poller(function(data) {
		// Update $scope.data, which automatically updates the UI:
		$scope.data = data;
		//console.log("Updated $scope.data! = ", $scope.data);
	});

	// Set the active nav tab:
	$scope.currentNavItem = 'page1';

	// Function for switching between views:
	$scope.goto = function(page) {
		$scope.page = page;
	};
}]);