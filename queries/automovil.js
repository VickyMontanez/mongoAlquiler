import {conx} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getAutoDisp(req, res) {
    try {
        let db = await conx();
        let colleccion = db.collection("alquiler");
        let results = await colleccion.find({ estado: { $eq: "Disponible" } }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error);
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};