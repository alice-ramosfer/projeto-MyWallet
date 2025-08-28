import { ObjectId } from "mongodb";
import { db } from "../config/database.js";


export async function postTransaction(req,res) {
    const newtransaction = req.body;
    

    try{
        await db.collection("transactions").insertOne({
                user: res.locals.user._id,
                value:newtransaction.value,
                description:newtransaction.description,
                type: newtransaction.type
        });
                
        return res.sendStatus(200);

    }catch (err){
        return res.sendStatus(500);
    }
    
}

export async function getTransaction(req,res) {
    const {id} = req.params;
    const page = req.query.page || 1;

    if (Number(page) < 0) return res.sendStatus(400);
    const limit = 10;
    const start = (page-1)*limit;
    


    try {
        const userTransactions = await db.collection("transactions").find({user: new ObjectId(id) }).skip(start).limit(limit).toArray()
        if(userTransactions.length === 0) return res.sendStatus(404);
        return res.send(userTransactions);

    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}

export async function putTrasaction(req,res) {
    const {id} = req.params;
    const editTransaction = req.body;
    try {
        const searchId = await db.collection("transactions").findOne({_id: new ObjectId(id) });
        if(!searchId) return res.sendStatus(404);

        if (searchId && searchId.user != res.locals.user._id){
            return res.sendStatus(401)
        }
        await db.collection("transactions").updateOne({_id: new ObjectId(id)},{
            $set:{value:editTransaction.value,
                description:editTransaction.description,
                type:editTransaction.type}
        });
        return res.sendStatus(204);
        
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}

export async function deleteTransaction(req,res) {
    const {id} = req.params;

    try {
        const searchId = await db.collection("transactions").findOne({_id: new ObjectId(id) });
        
        if(!searchId) return res.sendStatus(404);
        if (searchId && searchId.user != res.locals.user._id){
            return res.sendStatus(401)
        }
        await db.collection("transactions").deleteOne({_id: new ObjectId(id)});
        return res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
