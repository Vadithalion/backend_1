const express = require("express");
const app = express();

const HOSTNAME ='127.0.0.1';
const PORT = '3000';

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.listen(PORT, HOSTNAME, () =>{
    console.log(`Servidor arrancado en http://${HOSTNAME}:${PORT}/`);
});