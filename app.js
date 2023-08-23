import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
let app = express();
let config = JSON.parse(process.env.MY_CONFIG);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});