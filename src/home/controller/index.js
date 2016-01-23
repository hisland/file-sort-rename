'use strict';

import Base from './base.js';
import _ from 'lodash';
import fs from 'fs';
import File from 'vinyl';
import moment from 'moment';

export default class extends Base {
  async indexAction(){
    return this.display();
  }
}
