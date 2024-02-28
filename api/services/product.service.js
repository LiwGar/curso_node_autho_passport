const boom = require('@hapi/boom');

const { Op } = require('sequelize');

const { models } = require('./../../libs/sequelize');

class ProductsService {

  constructor(){ 
    this.products = [];
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }

    const { limit, offset, price, price_min, price_max } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min && price_max) {
      options.where.price = {
          [Op.between]: [price_min, price_max]
      };
    } else if (price_min) {
      options.where.price = {
          [Op.gte]: price_min
      };
    }

    const products = await models.Product.findAll(options);
    return products;
  };

  async findOne(id) {
    const product = await models.Product.findByPk(id, { 
      include: ['category']
    });
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  };

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  };

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  };
}

module.exports = ProductsService;
