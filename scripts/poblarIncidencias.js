import mongoose from 'mongoose';
import Incidencia from '../server/models/Incidencia.js';

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/clearfix', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ Conectado a MongoDB');

        await Incidencia.deleteMany({});
        await Incidencia.insertMany([
            {
                titulo: "Problema con WiFi",
                descripcion: "No hay señal en planta baja",
                categoria: "Red",
                prioridad: "Alta"
            },
            {
                titulo: "Pantalla rota",
                descripcion: "El monitor del escritorio 4 está dañado",
                categoria: "Hardware",
                prioridad: "Media"
            },
            {
                titulo: "Error de software",
                descripcion: "No abre Word",
                categoria: "Software",
                prioridad: "Baja"
            }
        ]);

        console.log("🔥 Datos de prueba insertados");
    } catch (error) {
        console.error("❌ Error durante la inserción:", error);
    } finally {
        mongoose.disconnect();
    }
};

main();
