import express from "express";
import { getAutoDisp } from "../queries/automovil.js";
import { limitQuery } from "../limit/config.js";
import { appValidateData, appMiddlewareAuto, appDTOData } from "../middleware/automovil.js";

const appAuto = express();
appAuto.use(express.json());

appAuto.get("/disponibles", limitQuery(), appValidateData, getAutoDisp);

export default appAuto;