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

				
				scope.$watch(attr.options, function() {
					var options = $parse(attr.options)(scope);
					console.log('options', options);
					element.daterangepicker(options);
				});
			}
		};
	}]);

})();
