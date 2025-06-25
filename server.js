require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

// MongoDB connection
const connectDB= require('./config/db');
connectDB();

// Routes
const productRoutes = require('./routes/productroutes');
fastify.register(productRoutes); // ✅ Don't call it

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info('🚀 Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
