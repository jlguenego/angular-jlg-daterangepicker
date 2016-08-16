(function() {
	'use strict';

	var app = angular.module('mainApp', ['jlg-daterangepicker', 'jlgI18n']);
	
	app.config(['jlgI18nServiceProvider', function(jlgI18nServiceProvider) {
        jlgI18nServiceProvider.localeDir('../../bower_components/jlg-i18n/locale');
		jlgI18nServiceProvider.i18nDir('./i18n');
    }]);

	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		
		var $locale = $injector.get('$locale');
		
		var jlgI18nService = $injector.get('jlgI18nService');
		
		$rootScope.changeLocale = jlgI18nService.changeLocale;
		$rootScope.locale = $locale;
		$rootScope.jlgI18nService = jlgI18nService;
		
		$rootScope.daterangeOptions = {
			autoApply: true
		};
		
		$rootScope.$watch('jlgI18nService.translation', function() {
			var $filter = $injector.get('$filter');
			var i18n = $filter('i18n');
			console.log('i18n(Apply)', i18n('Apply'));
			console.log('locale', $locale);
			$rootScope.daterangeOptions.locale = {
				format: 'MM/DD/YYYY',
				separator: ' - ',
				applyLabel: i18n('Apply'),
				cancelLabel: i18n('Cancel'),
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				weekLabel: 'W',
				daysOfWeek: [
					'Su',
					'Mo',
					'Tu',
					'We',
					'Th',
					'Fr',
					'Sa'
				],
				monthNames: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
				],
				firstDay: 1
			};
		}, true);
		
		
		
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
