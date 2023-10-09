import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuarios,putUsuario } from "../controllers/usuariosController.js";
import { check } from 'express-validator';
import { validarCampos } from "../middlewares/validar-campos.js";
import { checkUserById, emailValidator, roleValidator } from "../helpers/db-validators.js";

const router= Router();

router.get('/',getUsuarios);

router.post('/',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe ser de mas de 6 caracteres').isLength({
        min:8,
        max:20
    }),
    check('mail','El correo ingresado no tiene un formato valido').isEmail(),
    check('role').custom(roleValidator),
    check('mail').custom(emailValidator),
    validarCampos
],createUsuario);

router.delete('/:id',check('id','El ID no es valido').isMongoId(),
check('id','El usuario no existe en la BD').custom(checkUserById),validarCampos,deleteUsuario);

router.put('/:id',[
 check('id','El ID no es valido').isMongoId(),
 check('id','El usuario no existe en la BD').custom(checkUserById),
 check('role').custom(roleValidator)
],validarCampos,putUsuario);

export{
    router
}