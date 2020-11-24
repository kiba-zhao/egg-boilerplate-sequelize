/**
 * @fileOverview {{desc}}数据模型
 * @name {{modelName}}.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const {{modelName}} = app.model.define('{{modelName}}', {
    appId: {
      type: STRING(36),
      field: 'appId'
    },
    // 其他字段
    createdAt: {
      type: DATE,
      filed: 'created_at'
    },
    updatedAt: {
      type: DATE,
      filed: 'updated_at'
    }
  }, {
    tableName: 'tb_simple'    
  });

  return {{modelName}};
};
