const { config } = require('./../config/config');

module.exports = {
  development: {
    url: `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`,
    dialect: 'postgres',
    ...options, 
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
  }
}
