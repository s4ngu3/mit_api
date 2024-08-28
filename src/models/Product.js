// src/models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: { // Novo campo para armazenar o caminho da foto
    type: DataTypes.STRING,
  },
});

module.exports = Product;
