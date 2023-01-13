const http = require('http');
const { send } = require('process');

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end('Hola mundo :)')
})
const dia = new Date();
const hora = dia.toLocaleString();
const saludo = dia.getHours();
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
const connectedServer = server.listen(8080, ()=>{
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}, el día: ${hora}`)
})
