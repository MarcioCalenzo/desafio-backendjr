import { Router } from "express";
import { githubtokenController } from "../controllers/githubtoken.controller";

const tokengitRoutes = Router();

tokengitRoutes.post("", githubtokenController);

export default tokengitRoutes;
