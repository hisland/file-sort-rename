require('../css/main.less');


// 添加各种模块依赖
var app = angular.module('app', [
  'ui.router',
]);


app.directive('autoHeight', function($timeout, $parse) {
  return {
    //scope: true,   // optionally create a child scope
    link: function(scope, element, attrs) {
      element.on('input', function(e) {
        $(this).height(this.scrollHeight);
      });
      $timeout(function() {
        element.trigger('input')
      }, 50);
    }
  };
});


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise(function($injector, $location) { // 参数固定, 不是injector
    return '/';
  });

  $stateProvider.state('home', {
    url: '/',
    views: {
      "menu": {
        template: require('raw!jade-html!./tree.jade'),
        controller: function($scope, $http, menu) {
          $scope.list = menu;
        }
      }
    },
    resolve: {
      menu: function($http) {
        return $http.get('/index/list')
          .then(function(xhr) {
            return xhr.data;
          });
      }
    }
  });

})

// init angular
angular.bootstrap(document.body, ['app']);
