'use strict';

const { upperFirst, trimStart, camelCase } = require('lodash');

module.exports = {
  name: {
    desc: 'table name',
  },
  modelName: {
    desc: 'model name',
    default(vars) {
      const name = trimStart(vars.name, 'tb_');
      return upperFirst(camelCase(name));
    }
  },
  desc: {
    desc: 'resource description'
  },
  author: {
    desc: 'author name',
  },
};
