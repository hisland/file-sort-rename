const Base = require('./base.js');

const _ = require('lodash');
const glob = require('glob');

const path = require('path');
const fs = require('fs');

module.exports = class extends Base {
  async indexAction() {
    var p = this.get('path');
    if (!p) {
      p = '.';
    }
    p = path.resolve(p);
    var p2 = p.split('/');
    p2.shift();
    var next = '/',
      rs = [{
        name: '',
        url: next
      }];
    for (let i of p2) {
      next += i + '/';
      rs.push({
        name: i,
        url: next
      })
    }
    this.assign('path', JSON.stringify({
      full: p,
      sep: rs
    }));

    var list = glob.sync('*', {
      cwd: p
    });
    list = _.map(list, function(v) {
      var stat = fs.statSync(path.join(p, v));
      if (stat.isDirectory()) {
        return {
          name: v,
          url: path.join(p, v)
        }
      } else {
        return {
          name: v
        }
      }
    });
    this.assign('list', JSON.stringify(list));
    return this.display();
  }

  async sortAction() {
    var data = this.post(),
      count = 0;
    for (let i of data.list) {
      let op = path.join(data.path, i.name);
      let np = path.join(data.path, i.newName);
      if (fs.existsSync(op)) {
        fs.renameSync(op, np);
        count++;
      }
    }
    return this.json({
      code: 0,
      message: 'rename ' + count + ' count'
    });
  }
};
