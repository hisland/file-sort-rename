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
      "": {
        templateProvider: function(tree) {
          var tpl = require('jade-loader!./tree.jade');
          return tpl({
            tree: tree
          });
        },
        controller: function($scope, tree, $http, $rootScope) {
          $scope.res_list = tree;
          $scope.addName = 'term';
          $scope.isShow = $.cookie('isShow') === 'true' ? true : false;

          $rootScope.oldMap = {};

          function walk(list, map) {
            for (var i of list) {
              map[i.ID] = i;
              if (i.children) {
                walk(i.children, map)
              }
            }
          }
          walk(tree.children, $rootScope.oldMap);

          $scope.add = function(type) {
            $http.post('/index/add', {
              type: type,
              name: $scope.addName
            }).then(function(xhr) {
              location.reload();
            });
          }
          $scope.saveSort = function() {
            $http.post('/index/update_sort', $scope.res_list).then(function(xhr) {
              console.log(xhr.data);
              location.reload();
            })
          }
          $scope.updateKey = function(obj) {
            $http.post('/index/update_key', obj).then(function(xhr) {
              console.log(xhr.data);
            })
          }
          $scope.show = function() {
            $scope.isShow = !$scope.isShow;
            $.cookie('isShow', $scope.isShow);
          }
          $scope.toMenu = function() {
            $.post('/index/export_menu', function(rs) {
              console.log(rs);
            })
          }

          $('body').on('click', 'span.del', function(e) {
            var li = $(this).closest('li');
            var id = li.attr('id');
            $.post('/index/delete', id, function(rs) {
              li.remove();
            });
          }).on('input', 'ul input', function(e) {
            var li = $(this).closest('li');
            var id = li.attr('id');
            var key = $(this).attr('class');
            var val = $(this).val();
            var data = {
              id: id,
              data: {}
            }
            data.data[key] = val
            $scope.updateKey(data);
          });

        }
      }
    },
    resolve: {
      tree: function($http) {
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
