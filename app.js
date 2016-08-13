(function() {
	'use strict';

	var app = angular.module('mainApp', ['jlg-daterangepicker']);

	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		
		$rootScope.daterangeOptions = {
			locale: {
				format: 'DD/MM/YYYY'
			},
			autoApply: true
		};
		
		$rootScope.eventObject = {};
		
		$rootScope.$watch('isEventonShow', function() {
			if ($rootScope.isEventonShow) {
				$rootScope.eventObject['show.daterangepicker'] = [function() {
					console.log('event show.daterangepicker', arguments);
				}];
			} else {
				delete $rootScope.eventObject['show.daterangepicker'];
			}
		});
		$rootScope.model = {};
		
		$rootScope.onSubmit = function() {
			console.log('$rootScope.model', $rootScope.model);
			window.alert('form submitted. Look at the console.');
		};

	}]);



})();
