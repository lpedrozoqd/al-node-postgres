const {Client} = require('pg');

//Esta modalidad de conexión no es la adecuada.
//Se requiere un manejo de pool
async function getConnection() {
  const client = new Client({
    host:'localhost',
    port:5432,
    user:'lpedrozo',
    password:'r3b3c4',
    database:'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;

