import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarios,putUsuario } from "../controllers/usuariosController.js";
import { check } from 'express-validator';

const router= Router();

router.get('/',getUsuarios);

router.post('/',check('mail','El correo ingresado no tiene un formato valido').isEmail(),createUsuario);

router.delete('/',deleteUsuario);

router.put('/:id',putUsuario)

export{
    router
}