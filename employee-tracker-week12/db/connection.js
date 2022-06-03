const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },

    console.log(`Created a connection to the ${(process.env.DB_NAME)} database.`)
);

module.exports = db;