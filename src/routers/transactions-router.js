import { Router } from "express";
import { deleteTransaction, getTransaction, postTransaction, putTrasaction} from "../controlles/transactions-controllers.js";
import { validateSchema } from "../middlewares/schemas-middlewares.js";
import { transactionSchema } from "../schemas/transactions-schemas.js";
import { validateToken } from "../middlewares/auth-middlewares.js";

const transactionsRoutes = Router();

transactionsRoutes.post("/transactions", validateToken ,validateSchema(transactionSchema),postTransaction);
transactionsRoutes.get("/transactions/", validateToken, getTransaction);
transactionsRoutes.delete("/transactions/:id", validateToken, deleteTransaction);
transactionsRoutes.put("/transactions/:id", validateToken, validateSchema(transactionSchema),putTrasaction);
export  default transactionsRoutes; 