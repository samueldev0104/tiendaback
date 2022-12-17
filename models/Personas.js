const mongoose = require('../db/conectionDB');

const Personas = mongoose.Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    tipDoc: {
        type: String
    },
    numDoc: {
        type: String
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    }
},{
    collection: "Personas",
    versionKey: false
});

module.exports = mongoose.model("Personas", Personas);