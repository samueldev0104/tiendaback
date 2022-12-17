const express = require('express');
const bodyParser = require('body-Parser');
const app = express();
const cors = require('cors');
const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');

app.use(cors());
app.use(bodyParser.json());


//Personas
app.use("/personas", PersonasRouter);
//Usuarios
app.use("/usuarios", UsuariosRouter)

app.listen(5000);

