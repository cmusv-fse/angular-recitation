var app = angular.module("fse-recitation", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('helloworld', {
		url: '/helloworld',
		templateUrl: '../templates/helloworld.html',
		controller: "helloWorldController"
	})
	.state('directives', {
		url: '/directives',
		templateUrl: '../templates/directives.html',
		controller: "directivesController"
	});

	$urlRouterProvider.otherwise("helloworld");
});