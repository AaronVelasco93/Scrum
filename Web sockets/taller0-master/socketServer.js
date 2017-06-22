
//npm install socket.io -g
var socketServer = require('socket.io').listen(8082);
var clientes ={
    
    "cantidad":0    
    
    
};

socketServer.on('connect', function(socketClient) {
  console.log('Cliente conectado taller 1');
    console.log(socketClient);
    
    clientes.cantidad++;
    
    socketServer.emit('conectado','Hola mundo ws FES Aragon Clientes= '+clientes.cantidad);
    
    
});

// node socketServer.js
