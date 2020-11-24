/**
 * @fileOverview {{desc}}数据模型
 * @name {{modelName}}.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const {{modelName}} = app.model.define('{{name}}', {
    appId: STRING(24),
    // 其他字段
    created_at: DATE,
    updated_at: DATE,
  });

  return {{modelName}};
};
