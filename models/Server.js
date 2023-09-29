import express from 'express';
import cors from 'cors';
import {router} from '../routes/user.js'

class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.userEndPoint='/api/usuarios'
        //Middlewares
        this.middlewares();
        //rutas de la app
        this.routes();
    }

    middlewares(){

        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.userEndPoint,router);
    }
    listen(){
        this.app.listen(this.port);
    }
}

export{
    Server
}