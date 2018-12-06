/* --------------------------------------------------- */
/*
/*				RockBot App (Seena Remix)
/*						12/04/2018
/*	   		By: Seena Zandipour (craze3@gmail.com)
/*
/* --------------------------------------------------- */

/*
(function() {
  'use strict';
*/

  var app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
	
	//******************************************************************************/
	// API Polling Service
	//******************************************************************************/
	.factory('Poller', ['$http', '$timeout', function($http, $timeout) {
	  var data = {};
	  
	  function poller(success){
		$http.get('https://api.rockbot.com/v2/venue/10').then(function(r) {
		  data = r.data;
		  success(data);
		  //console.log(data);
		  $timeout(poller, 30000);
		}).catch(function (err) {});
	  };
	  poller();

	  return {
		poller: poller
	  };
	}])

	//******************************************************************************/
	// Main Controller
	//******************************************************************************/
	.controller('AppCtrl',['$scope', 'Poller', function($scope, Poller){
		$scope.page = 1;
		
		//$scope.data = Poller.data;
		Poller.poller(function(data) {
			$scope.data = data;
			console.log(data);
		});
			
		var imagePath = "https://material.angularjs.org/latest/img/logo.svg";
		 $scope.todos = [
		  {
			face : imagePath,
			what: 'Brunch this weekend?',
			who: 'Min Li Chan',
			when: '3:08PM',
			notes: " I'll be in your neighborhood doing errands"
		  },
		  {
			face : imagePath,
			what: 'Brunch this weekend?',
			who: 'Min Li Chan',
			when: '3:08PM',
			notes: " I'll be in your neighborhood doing errands"
		  },
		  {
			face : imagePath,
			what: 'Brunch this weekend?',
			who: 'Min Li Chan',
			when: '3:08PM',
			notes: " I'll be in your neighborhood doing errands"
		  },
		  {
			face : imagePath,
			what: 'Brunch this weekend?',
			who: 'Min Li Chan',
			when: '3:08PM',
			notes: " I'll be in your neighborhood doing errands"
		  },
		  {
			face : imagePath,
			what: 'Brunch this weekend?',
			who: 'Min Li Chan',
			when: '3:08PM',
			notes: " I'll be in your neighborhood doing errands"
		  },
		];
		
		$scope.currentNavItem = 'page1';

		$scope.goto = function(page) {
			$scope.status = "Goto " + page;
			$scope.page = page;
		};
		
		
	}]);

//})();