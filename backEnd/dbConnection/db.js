// db.js - Using connection connection
const mysql = require("mysql");

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    connectionLimit: 10,
    acquireTimeout: 60000,
    connectTimeout: 60000,
    timeout: 60000,
    reconnect: true
});

// Test the connection
connection.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.log('⚠️  App will start but database operations may fail');
        return;
    }
    console.log('✅ Connected to MySQL database');
    connection.release();
});

connection.on('error', (err) => {
    console.error('Database connection error:', err.message);
});

module.exports = connection;