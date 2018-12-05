/* --------------------------------------------------- */
/*
/*				RockBot App (Seena Remix)
/*						12/04/2018
/*	   		By: Seena Zandipour (craze3@gmail.com)
/*
/* --------------------------------------------------- */
// Starting point: https://material.angularjs.org/latest/demo/navBar
/*
require('angular-material');
require('angular-messages');
require('angular-animate');
require('angular-aria');
var angular = require('angular');
*/

(function() {
  'use strict';

  angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
	
	/* --- MAIN CONTROLLER --- */
	.controller('AppCtrl',['$scope',function($scope){
		$scope.currentNavItem = 'page1';

		$scope.goto = function(page) {
			$scope.status = "Goto " + page;
		};
	}]);

})();