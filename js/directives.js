directives= angular.module('sL.directives', []);

directives.directive('draggable', function() {
        return {
            restrict: 'A',
            link: function($scope, element, attrs) {
                element.draggable({
                    revert: true,
                    appendTo: "body",
                    helper: "clone"
                });
            }
        };
    });

 directives.directive('droppable', function($compile) {
        return {
            link: function(scope, element, attrs) {
                element.droppable({
                    accept: function(element){
                              if (element.hasClass("radical")){
                                return true;
                              } else if (element.hasClass("character")){
                                return true;
                              } else {
                                return false;
                              }
                            },
                    hoverClass: "drop-hover",
                    drop: function(event, ui) {
                      var dragged = angular.element(ui.draggable); // .parent();
                      var dropped = angular.element(this);
                      var updated_value = dropped.val() + dragged.find('.main').text();
                      return scope.$apply(function(){
                        scope.search=updated_value;
                      });
                    }
                });
            }
        };
    });
