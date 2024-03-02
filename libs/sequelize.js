const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const setupModels = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: false, 
};


if (config.isProd) {

  options.ssl = {
    rejectUnauthorized: false, 
  };
  options.connectionString = config.dbUrl;
} else {
  
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}

const sequelize = new Sequelize(options.connectionString, options);

setupModels(sequelize);

module.exports = sequelize;
