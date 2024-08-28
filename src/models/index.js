// src/models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();


console.log (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Sincronizar todos os modelos com o banco de dados
sequelize.sync({ alter: true });

module.exports = sequelize;
