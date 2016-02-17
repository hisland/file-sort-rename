require('../css/main.less');

// 添加各种模块依赖
var app = angular.module('app', [
  // 'ng-sortable',
]);

app.controller('show', function($scope) {
  $scope.path = path;
  $scope.list = list;

  $scope.change = function(){
    
  }
  $scope.sort = function(){
    
  }
  $scope.save = function(){
    
  }
});

// init angular
angular.bootstrap(document.body, ['app']);
