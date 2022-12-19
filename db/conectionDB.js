const mongoose = require ('mongoose');
const conexion = "mongodb+srv://admin:1234@cluster0.ukfgmul.mongodb.net/tienda?retryWrites=true&w=majority";
mongoose.connect(conexion)
    .then(evento => console.log("Conectado a Mongo"))
    .catch(error => console.log(error));


module.exports = mongoose;
