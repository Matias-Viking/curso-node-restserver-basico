import { Role } from "../models/role.js";
import { Usuario } from "../models/usuario.js";

const roleValidator=async(role='')=>{
    const validaRol=await Role.findOne({ role });
    if(!validaRol){
        throw new Error('Rol no valido.');
    }
}


const emailValidator=async(mail='')=>{

    const existeMail= await Usuario.findOne({ mail });
    if(existeMail){

        throw new Error('El correo electronico ya existe en la BD');
    }
}

const checkUserById= async(id='')=>{

    const existeId= await Usuario.findById(id);
    if(!existeId){
        throw new Error('El usuario no existe en la BD');
    }
}

export{
    roleValidator,
    emailValidator,
    checkUserById
}