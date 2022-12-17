const mongoose = require('../db/conectionDB');

const Usuarios = mongoose.Schema({
    usuario: {
        type: String,
        unique: true,
        required: true
    },
    clave: {
        type: String
    },
    rol: {
        type: String,
        required: true
    },
    estado: {
        type: String
    },
    persona: {
        _id: {
            type: String
        },
        correo: {
            type: String,
            unique: true,
            required: true
        }
    }
},{
    collection: "Usuarios",
    versionKey: false
});

module.exports = mongoose.model("Usuarios", Usuarios);