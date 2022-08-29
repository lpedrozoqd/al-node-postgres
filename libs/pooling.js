const {Pool} = require('pg');

  const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'lpedrozo',
    password:'r3b3c4',
    database:'my_store_',
  });

module.exports = pool;

