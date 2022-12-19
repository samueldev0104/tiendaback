const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const cors = require('cors');
const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');
const ProductosRouter = require('./routers/ProductosRouter');

app.use(cors());
app.use(bodyParser.json());


//Personas
app.use("/personas", PersonasRouter);
//Usuarios
app.use("/usuarios", UsuariosRouter);
//Productos
app.use("/productos", ProductosRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

