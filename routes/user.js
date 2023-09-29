import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarios,putUsuario } from "../controllers/usuariosController.js";

const router= Router();

router.get('/',getUsuarios);

router.post('/',createUsuario);

router.delete('/',deleteUsuario);

router.put('/:id',putUsuario)

export{
    router
}