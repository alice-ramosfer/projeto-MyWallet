import jwt from "jsonwebtoken";
import { db } from "../config/database.js";
import { ObjectId } from "mongodb"; 
import dotenv from "dotenv";
dotenv.config();

export async function validateToken(req,res,next) {
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer","").trim();
    if (!token) return res.sendStatus(401);

    try {
        jwt.verify(token, process.env.JWT, async(error, decoded) => {
            if (error) return res.sendStatus(401);
            const user = await db.collection("users").findOne({
                _id: new ObjectId(decoded.userId)
            });
            res.locals.user = user;
            next();
        })
    } catch (error) {
        return res.sendStatus(500);
    }
    
}