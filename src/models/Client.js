// src/models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Client = sequelize.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

module.exports = Client;
