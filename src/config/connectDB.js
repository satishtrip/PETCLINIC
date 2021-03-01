require("dotenv").config();
// import mysql from "mysql2";


// const { Sequelize } = require('sequelize');
// const DB_NAME = process.env.DB_NAME;
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;


// // Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: 'mysql'   /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// let connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// };
//module.exports  = connectDB
//import { config } from "dotenv/types";
import mysql from "mysql2"
//const mysql = require("mysql");


// Create a connection to the database

var connectDB = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'petbook'
})

connectDB.connect();


// open the MySQL connection
connectDB.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connectDB;