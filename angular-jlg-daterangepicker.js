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
				
				var $parse = $injector.get('$parse');
				
				var addEvent = function(on) {
					for (var event in on) {
						element.on(event, on[event][0]);
					}	
				};
				
				var removeEvent = function(on) {
					for (var event in on) {
						element.off(event);
					}	
				};
				
				scope.$watch(attr.options, function() {
					var options = $parse(attr.options)(scope);
					element.daterangepicker(options);
					var plugin = element.data('daterangepicker');
					if (attr.export) {
						scope[attr.export] = plugin;
					}
					var on = $parse(attr.on)(scope);
					addEvent(on);
					
				}, true);
				
				scope.$watch(attr.on, function(newValue, oldValue) {
					removeEvent(oldValue);
					addEvent(newValue);
				}, true);
				
			}
		};
	}]);

})();
