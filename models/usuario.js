import { Schema, model } from "mongoose";

const usuarioSchema=Schema({

    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    mail:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    img:{
        type:String,
    },
    role:{
        type:String,
        required:true,
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});

usuarioSchema.methods.toJSON = function (){
    const {__v, password, ...user} = this.toObject();
    return user;
}
const Usuario=model('Usuario',usuarioSchema);

export{
    Usuario
}