const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            files: "/api/files",
        }
        this.app.use(express.json());

        this.middlewares();

        this.routes();
    }

    middlewares(){
        // Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }))
    }

    routes(){
        this.app.use(this.path.files, require('../routes/files'));
    }


    listenServer(){
        this.app.listen(this.port, () => {
            console.log(`Server funcionando en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;