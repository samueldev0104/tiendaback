const express = require ('express');
const Personas = require('../models/Personas');
const Usuarios = require('../models/Usuarios');
const UsuariosRouter = express.Router();

//Listar Usuarios
UsuariosRouter.get("/", (req,res) =>{
    Usuarios.find()
        .then(datos => res.json({Usuarios: datos}))
        .catch(error => res.json({mensaje: error}));
});

//Guardar nuevo usuario
UsuariosRouter.post("/", (req,res)=>{
    const usuario = new Usuarios(req.body); 
    const persona = new Personas({correo: usuario.persona.correo});
    persona.save()
        .then(datos =>{
            usuario._id = datos._id;
            usuario.save()
                .then(datos => res.json({Usuarios: datos}))
                .catch(error => res.json({mensaje: error}));
        })
        .catch(error => {
            if (error.code == 11000){
                Personas.findOne({correo: usuario.persona.correo})
                    .then(datos =>{
                        usuario.persona._id = datos._id;
                        usuario.save()
                            .then(datos => (res.json(datos)))
                            .catch(error => res.json({mensaje: error}));
                    });                
            }else {  
                res.json({mensaje: error})
            }
        });
});

//Actualizar usuario
UsuariosRouter.patch("/", (req,res)=>{
    const usuario = new Usuarios(req.body);
    Personas.updateOne({_id: usuario.persona._id}, usuario.persona)
    Usuarios.updateOne({_id: usuario._id}, usuario)
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

//Eliminar usuario
UsuariosRouter.delete("/:id", (req,res)=>{
    Usuarios.deleteOne({_id: req.params.id})
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

//Login
UsuariosRouter.post("/login", (req, res) => {
    Usuarios.findOne({usuario: req.body.usuario, clave: req.body.clave})
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje:error}));
});

module.exports = UsuariosRouter;