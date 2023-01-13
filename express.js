//IMPORTARLO
const express = require('express')
const app = express();

// CONECTARLO
const PORT = 8080;

const dia = new Date();
const hora = dia.toLocaleString();
const saludo = dia.getHours();
let visitas = 0;
    (()=>{
    if(saludo >= 0 && saludo < 12){
        console.log('Buenos días.')
    }
    
    if(saludo >= 12 && saludo < 18){
        console.log('Buenas Tardes.')
    }
    
    if(saludo >= 18 && saludo < 24){
        console.log('Buenas noches.')
    }
})();
//INICIARLO
const server = app.listen(PORT, ()=>{
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}, el día: ${hora}`)
})
//Manejo de errores
server.on('Error', error=>{
    console.log(`Error en el servidor ${error}`)
})

//PETICION GET
app.get('/', (req, res)=>{
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>')
})
app.get('/visitas', (req,res)=>{
    visitas++;
    res.send(`Este sitio ha sido visitado ${visitas} veces.`)
})
app.get('/fyh', (req,res)=>{
    res.send({fyh: hora})
})