// server/models/Incidencia.js
const mongoose = require('mongoose');

const incidenciaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  prioridad: {
    type: String,
    enum: ['Alta', 'Media', 'Baja'],
    default: 'Media',
  },
  categoria: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ['Abierta', 'En progreso', 'Cerrada'],
    default: 'Abierta',
  },
});

const Incidencia = mongoose.model('Incidencia', incidenciaSchema);

module.exports = Incidencia;
