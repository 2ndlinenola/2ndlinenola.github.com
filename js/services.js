services = angular.module('sL.services', []);

services.factory('CelebrationsService', function($q, $http) {
    var service = {
        index: function() {
            var d = $q.defer();
            $http.get('celebrations').success(function(data, status) {
              console.log(data);
              d.resolve(data);
            }).error(function(data, status) {
              d.reject(data);
            });
            return d.promise;
        },
        show: function(id) {
            var d = $q.defer();
            $http.get('celeberations/' + id).success(function(data, status) {
              d.resolve(data);
            }).error(function(data, status) {
              d.reject(data);
            });
            return d.promise;
        }
    };
    return service;
});

services.factory('GroupsService', function($q, $http) {
    var service = {
        index: function() {
            var d = $q.defer();
            $http.get('groups').success(function(data, status) {
                d.resolve(data);
            }).error(function(data, status) {
                d.reject(data);
            });
            return d.promise;
        },
        show: function(id) {
            var d = $q.defer();
            $http.get('groups/' + id).success(function(data, status) {
                d.resolve(data);
            }).error(function(data, status) {
                d.reject(data);
            });
            return d.promise;
        }
    };
    return service;
});

// services.factory('CharactersService', function($http) {
//     var Characters = function() {
//         this.active = [];
//         this.items = [];
//         this.total = 0;
//         this.busy = false;
//         this.after = '';
//     };
//     Characters.prototype.nextPage = function() {
//         console.log("Pre" + this.active.length);
//         console.log("Pre" + this.total);
//         for (var i=0; i<50; i++){
//           this.active.push(this.items[i]);
//         }
//         // this.active.push(this.items.slice(0, 50));
//         this.items = this.items.slice(50);
//         console.log("Post" + this.active.length);
//         console.log("Post" + this.items.length);
//         console.log("Post" + this.total);
//     };
//     Characters.prototype.index = function(search, characterKind, characterComposition) {
//         var req = $http({
//             url: 'characters',
//             method: 'GET',
//             params: {
//                 search: search,
//                 character_kind: characterKind,
//                 character_composition: characterComposition
//             }
//         }).success(function(data, status) {
//             this.total = data.characters.length;
//             this.items = data.characters.slice(150);
//             this.active = data.characters.slice(0, 150);
//             // d.resolve();
//         }.bind(this));
//
//         req.error(function(data, status) {
//         });
//     };
//     return Characters;
// });

