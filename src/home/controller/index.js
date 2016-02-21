'use strict';

import Base from './base.js';
import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import glob from 'glob';
import File from 'vinyl';
import moment from 'moment';

export default class extends Base {
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
    var data = this.http._post,
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
}
