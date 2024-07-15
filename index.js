const app = require('./app');
const http = require('http');

// Usa el puerto especificado por Render a través de la variable de entorno `PORT`,
// o usa el puerto 3000 para desarrollo local
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});