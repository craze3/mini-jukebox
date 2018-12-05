/* --------------------------------------------------- */
/*
/*				RockBot App (Seena Remix)
/*						12/04/2018
/*	   		By: Seena Zandipour (craze3@gmail.com)
/*
/* --------------------------------------------------- */

(function() {
  'use strict';

  angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  
	.run(['$http', function($http) {
		//$http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
	}])
	
	//******************************************************************************/
	// API Polling Service
	//******************************************************************************/
	.factory('Poller', function($http, $timeout) {
	  var data = {};
	  
	  var poller = function() {
		$http.get('https://api.rockbot.com/v2/venue/10').then(function(r) {
		  data = r.data;
		  console.log(data);
		  $timeout(poller, 1000);
		});      
	  };
	  poller();

	  return {
		data: data
	  };
	})

	//******************************************************************************/
	// Main Controller
	//******************************************************************************/
	.controller('AppCtrl',['$scope', function($scope, Poller){
		$scope.page = 1;
		
		//$scope.data = Poller.data;
		
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

})();