import { Router } from "express";
import { signIn, signUp } from "../controlles/users-controlles.js";
import { validateSchema } from "../middlewares/schemas-middlewares.js";
import { userSignInSchema, userSignUpSchema } from "../schemas/users-schemas.js";

const authRouter = Router();

authRouter.post("/sign-up",validateSchema(userSignUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(userSignInSchema),signIn);

export default authRouter;