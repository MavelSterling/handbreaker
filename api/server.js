const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server running correctly' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Export for Vercel serverless function
module.exports = app; 