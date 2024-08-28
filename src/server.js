// src/server.js
const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/uploads', express.static('uploads')); // Servindo arquivos da pasta uploads


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/clients', clientRoutes); // Adicionando rotas de clientes
app.use('/products', productRoutes); // Adicionando rotas de produtos

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
