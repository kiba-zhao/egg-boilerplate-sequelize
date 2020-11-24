/**
 * @fileOverview {{desc}}业务逻辑
 * @name {{modelName}}.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { Service } = require('egg');

class {{modelName}}Service extends Service{

  /**
   * 列出匹配条件的所有数据
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项
   */
  async find(condition,opts) {
    const {ctx} = this;
    const {appId,limit,page} = opts;
    const offset = page * limit;

    delete condition.limit;
    delete condition.page;
    const res = await ctx.model.{{modelName}}.findAll({
      where:{...condition,appId},
      offset,
      limit
    });
    return res.map(_=>_.toJSON());
  }

  /**
   * 获取一个匹配的数据
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项   
   */
  async findOne(condition,opts) {
    const {ctx} = this;
    const {appId} = opts;

    const res = await ctx.model.{{modelName}}.findOne({
      where:{...condition,appId}
    });

    return res?res.toJSON():res;
  }

  /**
   * 新建一条数据
   * @param {Object} entity 数据内容
   * @param {Object} opts 可选项      
   */
  async createOne(entity,opts) {
    const {ctx} = this;
    const {appId} = opts;

    const res = await ctx.model.{{modelName}}.create(
      {...entity,appId}
    );

    return res.toJSON();
  }

  /**
   * 更新一条匹配数据的内容
   * @param {Object} entity 更新数据内容
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项
   */
  async replaceOne(entity,condition,opts){
    const {ctx} = this;
    const {appId} = opts;

    const preceding = await ctx.model.{{modelName}}.findOne({
      where:{...condition,appId}
    });
    if (!preceding) { return null; }

    preceding.set(preceding.toJSON(),null);
    const res = await preceding.save();

    return res.toJSON();
  }

  /**
   * 更新一个匹配数据的部分内容
   * @param {Object} entity 更新数据内容
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项
   */
  async updateOne(entity,condition,opts){
    const {ctx} = this;
    const {appId} = opts;

    const preceding = await ctx.model.{{modelName}}.findOne({
      where:{...condition,appId}
    });
    if (!preceding) { return null; }

    const res = await preceding.update(
      {...entity,appId}
    );

    return res.toJSON();
  }

  /**
   * 销毁一个匹配的数据
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项
   */
  async deleteOne(condition,opts) {
    const {ctx} = this;
    const {appId} = opts;

    const preceding = await ctx.model.{{modelName}}.findOne({
      where:{...condition,appId}
    });
    if (!preceding) { return null; }
    
    await preceding.destroy();

    return preceding;
  }

  /**
   * 销毁匹配的所有数据
   * @param {Object} condition 匹配条件
   * @param {Object} opts 可选项
   */
  async deleteAll(condition,opts) {
    const {ctx} = this;
    const {appId,limit} = opts;

    delete condition.limit;
    const precedings = await ctx.model.{{modelName}}.findAll({
      attributes:['appId'],
      where:{...condition,appId},
      limit:1
    });

    if(precedings.length <=0)
      return null;

    const destroyed = await ctx.model.{{modelName}}.destroy({
      where:{...condition,appId},
      limit
    });
    
    return destroyed;
  }
  
}

module.exports = {{modelName}}Service;
