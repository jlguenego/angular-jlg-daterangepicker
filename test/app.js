(function() {
	'use strict';

	var app = angular.module('mainApp', ['jlg-daterangepicker']);

	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		
		$rootScope.daterangeConfig = { a: 123 };

	}]);



})();
