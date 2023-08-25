import dotenv from 'dotenv';
import express from 'express';
import appcliente from './routes/cliente.js';

dotenv.config();
let app = express();
app.use("/clientes", appcliente);

let config = JSON.parse(process.env.MY_CONFIG);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});