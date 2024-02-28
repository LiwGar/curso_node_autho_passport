const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const setupModels = require('./../db/models');

if (!config.dbUrl) {
  console.error('The database URL is not defined in the configuration.');
  process.exit(1); 
}

const options = {
  dialect: 'postgres',
  logging:  config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
