ctrls = angular.module('sL.controllers', []);

ctrls.controller('CelebrationsController', function($scope, CelebrationsService) {
    CelebrationsService.index().then(function(data) {
        console.log(data);
        $scope.celebrations = data;
    });
});

ctrls.controller('CelebrationController', function($scope, CelebrationsService) {
    CelebrationsService.show().then(function(data) {
        $scope.celebration = data;
    });
});

ctrls.controller('GroupsController', function($scope, GroupsService) {
    GroupsService.index().then(function(data) {
        $scope.groups = data;
    });
});

ctrls.controller('GroupController', function($scope, GroupsService) {
    GroupsService.show().then(function(data) {
        $scope.group = data;
    });
});


// $scope.order = 'kanji_index';

// $scope.orderIs = function(column) {
//     return $scope.order === column;
// };
// $scope.orderReversed = function(column) {
//     return $scope.reverse === true;
// };
