var myApp = angular.module('myApp', ['ui.router']);

//Controllers for each page
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'AboutController',
    })
    .state('scholarship', {
        url: '/scholarship',
        templateUrl: 'pages/scholarship.html',
        controller: 'ScholarshipController',
    })
    .state('gallery', {
        url: '/gallery',
        templateUrl: 'pages/gallery.html',
        controller: 'GalleryController',
    })
    .state('why',{
        url:'/why',
        templateUrl: 'pages/why.html',
        controller: 'WhyController',
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'ContactController',
    })
})

.controller('HomeController', function($scope) {

})

.controller('AboutController', function($scope) {

})

.controller('ScholarshipController', function($scope, $http) {
    
})

.controller('GalleryController', function($scope, $http) {

})

.controller('WhyController', function($scope) {

})

.controller('ContactController', function($scope) {

}); 
