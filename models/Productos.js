const mongoose = require('../db/ConectionDB');

const Productos = mongoose.Schema({
    nombre:{
        type:String
    },
    codigo:{
        type:String
    },
    cantidad:{
        type:Number,
        required: true
    },
    precioVenta:{
        type:Number,
        required: true
    },
    precioCompra:{
        type:Number,
        required: true
    },
    stockMinimo:{
        type:Number
    },
    descripcion:{
        type:String
    },
    unidadMedida:{
        type:String,
        required: true,
        unique: true
    }
},{
    colection: "Productos",
    versionKey: false

});

module.exports = mongoose.model("Productos", Productos);