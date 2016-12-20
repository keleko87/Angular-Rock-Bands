var bandsApp = angular.module('bandsApp', ['ui.router']);

bandsApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/", "/home/list");
    $urlRouterProvider.otherwise("/home/list");

    $stateProvider
        .state('foo', {
            url: '/foo',
            templateUrl: 'views/foo.html',
            controller: 'maintenanceController'
        })
        .state('bar', {
            url: '/bar',
            templateUrl: 'views/bar.html',
            controller: 'maintenanceController'
        })
        .state('home', {
            // I have decided to use "Abstract State" for routes of the list of rock bands
            abstract: true,
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'bandsController'
        })
        .state('home.list', {
            url: '/list',
            // loaded into ui-view of parent's template
            templateUrl: 'views/home.list.html'
        })
        .state('home.detail', {
            url: '/:id',
            // loaded into ui-view of parent's template
            templateUrl: 'views/home.detail.html',
            controller: function($scope, $stateParams){
                $scope.band = $scope.bands[$stateParams.id];
                // console.log($scope.band);
            }

        })




});

bandsApp.controller('maintenanceController', function($scope){
    $scope.message = 'En construccion';
});

bandsApp.controller('bandsController', function($scope) {

    $scope.message = 'test';

    $scope.bands = [
        {
            id: 0,
            name: 'The Rolling Stones',
            url: 'the-rolling-stones',
            embed: 'https://www.youtube.com/embed/iXd6O321Ruc',
            image: '',
            text: ''
        },
        {
            id: 1,
            name: 'The Beatles',
            url: 'the-beatles',
            embed: 'https://www.youtube.com/embed/Jbt8oH5Lxto',
            image: '',
            text: ''
        },
        {
            id: 2,
            name: 'Queen',
            url: 'queen',
            embed: 'https://www.youtube.com/embed/WUOtCLOXgm8',
            image: '',
            text: ''
        }
    ];

});