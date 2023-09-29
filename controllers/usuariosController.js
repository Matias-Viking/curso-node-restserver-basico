import { response } from "express";


const getUsuarios=(req,res)=>{

    const params=req.query;
    res.json({

        msg:"Get Usuario",
        params
    });
}

const createUsuario=(req,res=response)=>{
    const cuerpo=req.body
    res.json({

        msg:'POST API',
        cuerpo

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
