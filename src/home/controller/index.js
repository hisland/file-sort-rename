'use strict';

import Base from './base.js';
import _ from 'lodash';
import fs from 'fs';
import File from 'vinyl';
import moment from 'moment';

export default class extends Base {
  async indexAction() {
    return this.display();
  }
  async listAction() {
    return this.json([{
      "id": "2150ffbcc1d311e5bcd8fb6b2472d1c3",
      "organizationName": "校长室",
      "introduction": "",
      "sort": 1,
      "parentId": "",
      "children": [{
        "id": "2155d2dac1d311e5bcd8fb6b2472d1c3",
        "organizationName": "正校长",
        "introduction": "",
        "sort": 1,
        "parentId": "2150ffbcc1d311e5bcd8fb6b2472d1c3",
        "children": [],
        "accountSize": 0
      }, {
        "id": "215b15cec1d311e5bcd8fb6b2472d1c3",
        "organizationName": "副校长",
        "introduction": "",
        "sort": 2,
        "parentId": "2150ffbcc1d311e5bcd8fb6b2472d1c3",
        "children": [],
        "accountSize": 0
      }],
      "accountSize": 0
    }, {
      "id": "21601768c1d311e5bcd8fb6b2472d1c3",
      "organizationName": "书记室",
      "introduction": "",
      "sort": 2,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }, {
      "id": "216711eec1d311e5bcd8fb6b2472d1c3",
      "organizationName": "教务处",
      "introduction": "",
      "sort": 3,
      "parentId": "",
      "children": [{
        "id": "216e6228c1d311e5bcd8fb6b2472d1c3",
        "organizationName": "教务科",
        "introduction": "",
        "sort": 1,
        "parentId": "216711eec1d311e5bcd8fb6b2472d1c3",
        "children": [],
        "accountSize": 0
      }],
      "accountSize": 0
    }, {
      "id": "2176bcb6c1d311e5bcd8fb6b2472d1c3",
      "organizationName": "财务处",
      "introduction": "",
      "sort": 4,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }, {
      "id": "217af088c1d311e5bcd8fb6b2472d1c3",
      "organizationName": "后勤处",
      "introduction": "",
      "sort": 5,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }, {
      "id": "2180a9b0c1d311e5bcd8fb6b2472d1c3",
      "organizationName": "咨询室",
      "introduction": "",
      "sort": 6,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }, {
      "id": "21861fe4c1d311e5bcd8fb6b2472d1c3",
      "organizationName": "医疗室",
      "introduction": "",
      "sort": 7,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }, {
      "id": "218c481ac1d311e5bcd8fb6b2472d1c3",
      "organizationName": "年级组",
      "introduction": "",
      "sort": 8,
      "parentId": "",
      "children": [],
      "accountSize": 0
    }]);
  }
  async urlAction() {
    return this.json([{
      url: 'abc/def/kk'
    }]);
  }
  async detailAction() {
    return this.json({
      url: 'abc/def/kk',
      name: 'abc',
      type: 'post'
    });
  }
}
