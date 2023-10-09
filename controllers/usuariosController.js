import { response } from "express";
import { Usuario } from "../models/usuario.js";
import bcryptjs from 'bcryptjs';




const getUsuarios=async(req,res)=>{

    const {limite = 5, desde=0}=req.query;
   // const usuarios=await Usuario.find({state:true}).limit(limite).skip(desde);
    //const total=await Usuario.countDocuments({state:true});

    const [total,usuarios]= await Promise.all([
        Usuario.countDocuments({state:true}),
        Usuario.find({state:true})
            .limit(limite)
            .skip(desde)
    ]);

    res.json({total,usuarios});
} 

const createUsuario= async(req,res=response)=>{
    const {name,mail,password,role}=req.body;
    const usuario= new Usuario({name,mail,password,role});

    //Encriptar password
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);
    //Guardar cambios en la BD
    await usuario.save();
    
    res.status(201).json({

        msg:'USUARIO CARGADO EXITOSAMENTE',
        usuario

    });
    
}

const deleteUsuario=async(req,res)=>{

    const { id }=req.params;
    const usuario= await Usuario.findById(id);
    usuario.state=false;
    await usuario.save();

    res.json({
        msg:`Usuario ${id} eliminado con exito`
    });
 }


 const putUsuario=async(req,res)=>{

    const { id }=req.params;
    const { password,google,mail,...resto }=req.body;
    if(password){
        const salt=bcryptjs.genSaltSync();
        resto.password=bcryptjs.hashSync(password,salt);
    }

    const usuario= await Usuario.findByIdAndUpdate(id,resto);

    res.json({msg:'OK - Actualizado'});
    
 }

export {
    getUsuarios,createUsuario,deleteUsuario,putUsuario
}
