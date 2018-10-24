import angular from 'angular';

import 'angular-vs-repeat';

export default angular
    .module('angularVirtualScrollingApp', ['vs-repeat'])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.items = [];
        for (let i = 0; i < 1000; i++) {
            $scope.items.push({ description: 'ABC', size: 39 })
        }
    }])
    .name;