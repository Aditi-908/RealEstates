import express from "express";

const router = express.Router();

import * as auth from "../controllers/auth.js";
import { requireSignin } from "../middlewares/auth.js";

router.get("/", requireSignin, auth.welcome); //after adding middlewares(requireSignin) now it'll not accesible to anyone, it'll only accessible to login user
router.post("/pre-register", auth.preRegister);
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/forgot-password", auth.forgotPassword);
router.post("/access-account", auth.accessAccount);
router.post("/refresh-token", auth.refreshToken);
router.post("/current-user", requireSignin, auth.currentUser);

export default router;
