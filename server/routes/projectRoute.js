import express from "express";
import asyncHandler from "express-async-handler";
import Project from "../models/projectmodel.js";
import generateToken from "../utils/jwtToken.js";
import { protect, admin } from "../middleware/auth.js";
import { index, create, update } from "../controllers/projectcontroller.js";
const router = express.Router();

router.route("/").get(protect, index);

router.route("/new").post(create);

router.route("/:id").put(update);

export default router;
