import express from "express";
import { getClientes } from "../queries/cliente.js";
import { limitQuery } from "../limit/config.js";
import { appValidateData, appMiddlewareCliente, appDTOData } from "../middleware/cliente.js";

const appcliente = express();
appcliente.use(express.json());

//1.Show all customers registered in the database.
appcliente.get("/all", limitQuery(), getClientes);

export default appcliente;