const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.js');

// Load config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server runnning in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
);
