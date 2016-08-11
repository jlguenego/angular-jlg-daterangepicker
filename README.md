Angular JLG Daterangepicker
=======================

Angular directive for the https://github.com/dangrossman/bootstrap-daterangepicker without loss of functionalities.

Get Started
----------------

This project requires:
- jquery
- angular
- bootstrap
- moment
- bootstrap-daterangepicker


###Bower

```sh
bower install angular-jlg-daterangepicker --save
```

Install the bootstrap-daterangepicker of Dan Grossman as indicated in this [document](https://github.com/dangrossman/bootstrap-daterangepicker).

Then add the javascript file `angular-jlg-daterangepicker.js` to use the angular directive `input[daterangepicker]`.


Example of `index.html` file:
```html
<!DOCTYPE html>
<html ng-app="mainApp" lang="en">
	<head>
		
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

		<title>Bower test</title>
		
		<link rel="stylesheet" href="../../bower_components/angular/angular-csp.css" />
		<link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.css" />
		<link rel="stylesheet" href="../../bower_components/bootstrap-daterangepicker/daterangepicker.css" />
		
	</head>

	<body ng-cloak>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<form name="form" ng-submit="onSubmit();">
						<div class="form-group">
							<label for="exampleInputEmail1">Date range</label>
							<input type="daterangepicker" class="form-control" ng-model="model.daterange" placeholder="Enter a date range"
								export="myDaterangepicker" options="daterangeOptions"
								on="eventObject" />
						</div>
						<button type="submit" class="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
		</div>
	
		
		
		<script src="../../bower_components/jquery/dist/jquery.js"></script>
		<script src="../../bower_components/moment/moment.js"></script>
		<script src="../../bower_components/bootstrap/dist/js/bootstrap.js"></script>
		<script src="../../bower_components/angular/angular.js"></script>
		<script src="../../bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
		
		<script src="../../bower_components/angular-jlg-daterangepicker/dist/angular-jlg-daterangepicker.js"></script>
		<script src="app.js"></script>
	
	</body>
</html>
```

and here is an example of a `app.js` file:
```javascript
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
		
		
		$rootScope.eventObject['show.daterangepicker'] = [function() {
			console.log('event show.daterangepicker', arguments);
		}];
			
		$rootScope.model = {};
		
		$rootScope.onSubmit = function() {
			console.log('$rootScope.model', $rootScope.model);
			window.alert('form submitted. Look at the console.');
		};

	}]);
})();
```



###npm and browserify

```sh
npm install angular-jlg-daterangepicker --save
```

The `app.js` file to browserify should looks like this:
```javascript
'use strict';
require('./style.css');
window.$ = window.jQuery = require('jquery');
window.moment = require('moment');
window.angular = require('angular');

var app = angular.module('mainApp', [require('angular-jlg-daterangepicker')]);

app.run(['$injector', function($injector) {
	var $rootScope = $injector.get('$rootScope');
	
	$rootScope.daterangeOptions = {
		locale: {
			format: 'DD/MM/YYYY'
		},
		autoApply: true
	};
	
	$rootScope.eventObject = {};
	
	
	$rootScope.eventObject['show.daterangepicker'] = [function() {
		console.log('event show.daterangepicker', arguments);
	}];
		
	$rootScope.model = {};
	
	$rootScope.onSubmit = function() {
		console.log('$rootScope.model', $rootScope.model);
		window.alert('form submitted. Look at the console.');
	};

}]);
```



Usage
-------------

The directive used to wrap the jQuery plugin `$('selector').daterangepicker();` is the following:

```javascript
<input type="daterangepicker" class="form-control" ng-model="model.daterange" placeholder="Enter a date range"
								export="myDaterangepicker" options="daterangeOptions"
								on="eventObject" />
```

where:
- `<input type="daterangepicker" />` is the directive itself.
- `class="form-control"` is for Bootstrap design
- `ng-model="model.daterange"` is for linking the model as usual
- `placeholder="Enter a date range"` is to have a traditional placeholder.
- `export="myDaterangepicker"` is to link the jQuery plugin object to the angular model.
- `options="daterangeOptions"` is to link the jQuery plugin options object to the angular model. You can put all the options documented in the [Dan Grossman daterangepicker project](https://github.com/dangrossman/bootstrap-daterangepicker).
- `on="eventObject"` is to specify all custom event the jQuery plugin can accept. Once more, you can put all the event documented in the [Dan Grossman daterangepicker project].

Note that both the options and the eventObject are watched. So the directive can be dynamically configured.

End of document
------------------------
