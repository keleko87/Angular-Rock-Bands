var bandsApp = angular.module('bandsApp', ['ui.router', 'ngMeta', 'youtube-embed']);

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
            controller: 'bandsController',
            data: {
                'meta': {
                    'autor': 'mario martin'
                }
            }
        })
        .state('home.list', {
            url: '/list',
            // loaded into ui-view of parent's template
            templateUrl: 'views/home.list.html',
            // Data inheritance from parent -> Home
            data: {
                'meta': {
                    'title': 'Angular Rocks',
                    'description': 'Esto es la descripción por defecto',
                    'keywords': 'angular rocks default',
                    'og:title': 'Angular XX bands Rocks',
                    'og:description': 'Visita nuestra página de bandas de rock'
                }
            }
        })
        .state('home.detail', {
            url: '/:id',
            // loaded into ui-view of parent's template
            templateUrl: 'views/home.detail.html',
            controller: 'homeDetailController',
            // Data inheritance from parent -> Home
            data: {
                'meta': {
                    'title': 'A rock band',
                    'description': 'Descripción de la banda de rock iría aquí',
                    'keywords': 'angular rock band',
                    'og:title': 'Angular the best band',
                    'og:description': 'Una de las bandas de rock'
                }
            }

        })

});

bandsApp.controller('maintenanceController', function($scope){
    $scope.message = 'En construccion';
});

bandsApp.controller('homeDetailController', function($scope, $stateParams){
    $scope.band = $scope.bands[$stateParams.id];
    // console.log($scope.band);
});

bandsApp.controller('bandsController', function($scope) {

    $scope.message = 'test';

    $scope.bands = [
        {
            id: 0,
            name: 'The Rolling Stones',
            url: 'the-rolling-stones',
            embed: 'iXd6O321Ruc',
            image: 'images/rolling1.jpg',
            comments: [
                {author: 'Lucy Perry',
                 comment: 'ras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                cimage: 'images/background.jpg'
                },
                {author: 'Steven Barry',
                 comment: 'nibh libero, risque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                cimage: 'images/rock-concert.jpg'
                },
                {author: 'Alex Crowel',
                    comment: 'Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/queen1.jpg'
                }
            ],
            text: 'The Rolling Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui'
        },
        {
            id: 1,
            name: 'The Beatles',
            url: 'the-beatles',
            embed: 'Jbt8oH5Lxto',
            image: 'images/beatles1.jpg',
            comments: [
                {author: 'Jessie L',
                    comment: 'ravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/rolling1.jpg'
                },
                {author: 'Alex Crowel',
                    comment: 'rlla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/rock-concert.jpg'
                }
            ],
            text: 'The Beathes Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
        },
        {
            id: 2,
            name: 'Queen',
            url: 'queen',
            embed: 'WUOtCLOXgm8',
            image: 'images/queen1.jpg',
            comments: [
                {author: 'John Brown',
                    comment: 'Fd in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/rolling1.jpg'
                },
                {author: 'Alexia S.',
                    comment: 'scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/concert-joy.jpg'
                },
                {author: 'Nora Lewis',
                    comment: 'ras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.',
                    cimage: 'images/rock-concert.jpg'
                }
            ],
            text: 'Queen Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
        }
    ];

});


bandsApp.run(function(ngMeta) {
    // Initialize ngMeta
    ngMeta.init();
});