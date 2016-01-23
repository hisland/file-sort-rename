module.exports = {
  walkTree: function(parent, children_key, fn) {
    walk(0);

    function walk(__lv) {
      for (var i = 0, item, len = parent[children_key].length; i < len; i++) {
        item = parent[children_key][i];
        fn(item, i, parent, __lv)
        if (item[children_key]) {
          walk(item, children_key, fn, __lv + 1)
        }
      }
    }
  }
}
