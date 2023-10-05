import { response } from "express";
import { Usuario } from "../models/usuario.js";
import bcryptjs from 'bcryptjs';
import { validationResult } from "express-validator";


const getUsuarios=(req,res)=>{

    const params=req.query;
    res.json({

        msg:"Get Usuario",
        params
    });
}

const createUsuario= async(req,res=response)=>{
    const {name,mail,password,role}=req.body;
    const usuario= new Usuario({name,mail,password,role});
    const errors= validationResult(req);

    //Valido formato de correo electronico
    if(!errors.isEmpty()){

        return res.status(400).json(errors);
    }

    //Validar si correo existe
    const existeMail= await Usuario.findOne({ mail });
    if(existeMail){

        return res.status(400).json({
            msg:'El correo electronico ya existe en la BD'
        });
    }
    //Encriptar password
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);
    //Guardar cambios en la BD
    await usuario.save();
    
    res.json({

        msg:'USUARIO CARGADO EXITOSAMENTE',
        usuario

    });
    
}

const deleteUsuario=(req,res)=>{

    res.json('DELETE FORRAZO');
 }


 const putUsuario=(req,res)=>{

    const id=req.params.id;
    res.json({

        msg: 'Todos putos',
        id
    });
 }

export {
    getUsuarios,createUsuario,deleteUsuario,putUsuario
}
