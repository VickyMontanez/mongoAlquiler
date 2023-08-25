import express from "express";
import { getClientes } from "../queries/cliente.js";

const appcliente = express();
appcliente.use(express.json());

appcliente.get("/all", getClientes);

export default appcliente;