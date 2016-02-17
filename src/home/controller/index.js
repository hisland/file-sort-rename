'use strict';

import Base from './base.js';
import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import File from 'vinyl';
import moment from 'moment';

export default class extends Base {
  async indexAction() {
    var p = this.get('path');
    if (!p) {
      p = '.';
    }
    var p2 = path.resolve(p).split('/');
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
    this.assign('path', JSON.stringify(rs));

    var list = fs.readdirSync(p);
    console.log(list);
    this.assign('list', JSON.stringify(list));
    return this.display();
  }
  async sortAction() {
    var list = this.http._post;
    for (let i of list) {
      fs.statSync(i.path);
      fs.renameSync(i.path, i.newpath);
    }
    return this.json({
      code: 0,
      message: 'ok'
    });
  }
}
