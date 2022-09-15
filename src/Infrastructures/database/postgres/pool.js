/* istanbul ignore file */
const { Pool } = require('pg');

// const testConfig = {
//   host: process.env.PGHOST_TEST,
//   port: process.env.PGPORT_TEST,
//   user: process.env.PGUSER_TEST,
//   password: process.env.PGPASSWORD_TEST,
//   database: process.env.PGDATABASE_TEST,
// };

const testConfig = {
  host: 'ec2-34-231-42-166.compute-1.amazonaws.com',
  port: '5432',
  user: 'gdbhabdxgkfarn',
  password: '05e34567c4a6a2c074cdfbea5c7f19b9519a3caa5f93705072bb9421eb637679',
  database: 'd56pa9am4tj2bb',
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = process.env.NODE_ENV === 'test' ? new Pool(testConfig) : new Pool(testConfig);
console.log("TOKEN:"+ process.env.ACCESS_TOKEN_KEY)
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(result.rows);
//   });
// });
module.exports = pool;
