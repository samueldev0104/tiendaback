const mongoose = require ('mongoose');
const conexion = "mongodb+srv://root:admin@cluster0.kfie5kj.mongodb.net/ProyectoC4?retryWrites=true&w=majority";
mongoose.connect(conexion)
    .then(evento => console.log("Conectado a Mongo"))
    .catch(error => console.log(error));


module.exports = mongoose;