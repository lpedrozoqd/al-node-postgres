const {Pool} = require('pg');
const {config} = require('./../config/config');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPasswUser);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

/*
  const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'lpedrozo',
    password:'r3b3c4',
    database:'my_store_',
  });
*/

const pool = new Pool({connectionString: URI});

module.exports = pool;

