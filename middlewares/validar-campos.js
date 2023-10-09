import { validationResult } from "express-validator";

const validarCampos=(req,res,next)=>{

    const errors= validationResult(req,res);

    if(!errors.isEmpty()){

        return res.status(400).json(errors);
    }

      next();
}

export{
    validarCampos
}