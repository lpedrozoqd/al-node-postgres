const {config} = require('./../config/config');
const {Sequelize} = require('sequelize');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPasswUser);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect : 'postgres',
  logging : true
});

module.exports = sequelize;

