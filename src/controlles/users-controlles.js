import { db } from "../config/database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


export async function signUp(req,res) {
    const body = req.body;
 
    try{
        const searchEmail = await db.collection("users").findOne({email:body.email});
        if (searchEmail) return res.sendStatus(409);
        await db.collection("users").insertOne({
            ...body,
            senha:bcrypt.hashSync(body.senha,10)
        });
        return res.sendStatus(201);
    }catch(err){
        return res.sendStatus(500)
    }


    
}

export async function  signIn(req,res) {
    const body = req.body;
    
    try{
        const registereduser = await db.collection("users").findOne({email: body.email});
      
        if(!registereduser){
            return res.status(404).send("Email ou senha incorretos");
        }
    
        if (registereduser && bcrypt.compareSync( body.senha, registereduser.senha)){

            const token = jwt.sign({userId:registereduser._id},process.env.JWT,{expiresIn:172800});
            return res.status(200).send(token);
        }
        return res.status(401).send("Email ou senha incorretos");

    }catch(err){
        return res.sendStatus(500);
    }


}