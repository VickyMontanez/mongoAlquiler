import {conx} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getClientes(req, res) {
    try {
        let db = await conx();
        let colleccion = db.collection("cliente");
        let results = await colleccion.find({},{nombre:1, apellido:1, _id:0}).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error);
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};
