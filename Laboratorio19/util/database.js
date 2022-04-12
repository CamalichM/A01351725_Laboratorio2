const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tc_roles',
    password: ''
});

module.exports = pool.promise();