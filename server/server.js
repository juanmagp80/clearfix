// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const incidenciaRoutes = require('./routes/incidencias');
app.use('/api/incidencias', incidenciaRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/clearfix', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log('Error al conectar a la base de datos:', err));

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Servidor Express en funcionamiento');
});
app.get('/test', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Definir el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
