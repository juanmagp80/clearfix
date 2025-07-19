const express = require('express');
const Incidencia = require('../models/Incidencia');
const router = express.Router();

// Ruta GET para obtener todas las incidencias
router.get('/', async (req, res) => {
    console.log('Recibiendo solicitud para obtener todas las incidencias');
    try {
        const incidencias = await Incidencia.find();  // Obtener todas las incidencias
        res.json(incidencias);  // Devolverlas como respuesta
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener incidencias', error });
    }
});

// Ruta POST para crear una incidencia
router.post('/', async (req, res) => {
    console.log('Body recibido:', req.body); // 👈 Agrega esto
    console.log('Recibiendo solicitud para crear una incidencia');
    try {
        const nuevaIncidencia = new Incidencia(req.body);  // Crear nueva incidencia a partir del body de la solicitud
        await nuevaIncidencia.save();  // Guardar la incidencia en la base de datos
        res.status(201).json(nuevaIncidencia);  // Enviar la incidencia recién creada como respuesta
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la incidencia', error });
    }
});
router.get('/', async (req, res) => {
    const { estado, prioridad } = req.query;
    const filtro = {};
    if (estado) filtro.estado = estado;
    if (prioridad) filtro.prioridad = prioridad;

    const incidencias = await Incidencia.find(filtro);
    res.json(incidencias);
});
router.delete('/:id', async (req, res) => {
    await Incidencia.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Incidencia eliminada' });
});
router.patch('/:id', async (req, res) => {
    const incidencia = await Incidencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(incidencia);
});

module.exports = router;
