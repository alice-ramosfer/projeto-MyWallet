import {MongoClient} from "mongodb"
import dotenv from "dotenv"
dotenv.config();

const clientMongo = new MongoClient(process.env.DATABASE_URL);

try{
   await clientMongo.connect();
   console.log("Banco conectado")
}catch (err){
    console.log(err.menssage);
}

export const db = clientMongo.db();