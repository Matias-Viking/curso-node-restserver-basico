import mongoose from "mongoose";

const dbConnection= async()=>{

    try{
        await mongoose.connect(process.env.DB_STRING);

        console.log('Conexion exitosa');
    }
    catch(error){
        console.log(error);
    }
}

export{
    dbConnection
}