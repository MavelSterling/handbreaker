const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '.')));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'breaker_game.html'));
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log(`📱 Accesible desde cualquier dispositivo en la red local`);
    console.log(`🌐 Para acceso público, considera usar servicios como Heroku, Vercel o Netlify`);
});

module.exports = app; 