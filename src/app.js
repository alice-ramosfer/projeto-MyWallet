import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv"
import authRouter from "./routers/auth-router.js";
import transactionsRoutes from "./routers/transactions-router.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(transactionsRoutes);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)});