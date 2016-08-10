(function() {
	'use strict';
	
	var app = angular.module('jlg-daterangepicker', []);
	
	app.directive('input', ['$injector', function($injector) {
		return {
			restrict: 'E',
			require: 'ngModel',
			link: function (scope, element, attr, ngModel) {
				if (attr.type !== 'daterangepicker') {
					return;
				}
				console.log('link daterangepicker');
				
				var $parse = $injector.get('$parse');
				
				var config = $parse(attr.config)(scope);
				console.log('config', config);
			}
		};
	}]);
})();