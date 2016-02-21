require('../css/main.less');

// 添加各种模块依赖
var app = angular.module('app', [
  // 'ng-sortable',
]);

app.controller('show', function($scope) {
  $scope.path = path;
  $scope.list = list;

  function prefix0(val, len) {
    val += '';
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  function bitWidth(len) { // 10进制位宽, 0-9 1位, 10-99 2位, 100-999 3位
    if (len < 10) {
      return 1;
    }
    return Math.floor(Math.log10(len)) + 1;
  }

  $scope.checkAll = function() {
    _.each(list, function(v) {
      v.checked = $scope.check_all;
    });
    $scope.change();
  }
  $scope.change = function() {
    var checked = _.filter(list, function(v) {
      return v.checked;
    });
    if (checked.length === list.length) {
      $scope.check_all = true;
    } else {
      $scope.check_all = false;
    }
    var len = bitWidth(checked.length);
    _.each(checked, function(v, i) {
      v.newName = v.name.replace(/(^\d+\.)?(.+)/, function(m, a, b) {
        return prefix0(i, len) + '.' + b;
      })
    })
  }
  $scope.sort = function() {

  }
  $scope.save = function() {

  }
});

// init angular
angular.bootstrap(document.body, ['app']);
