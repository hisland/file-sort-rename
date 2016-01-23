'use strict';

import Base from './base.js';
import _ from 'lodash';
import fs from 'fs';
import File from 'vinyl';
import moment from 'moment';
import menu from './menu.json';

export default class extends Base {
  async listAction(){
    var model = this.model('menu');
    return this.json(menu);
  }
  async addAction(){
    var model = this.model('menu');
    return this.display();
  }
  async updateAction(){
    var model = this.model('menu');
    return this.display();
  }
  async deleteAction(){
    var model = this.model('menu');
    return this.display();
  }
}
