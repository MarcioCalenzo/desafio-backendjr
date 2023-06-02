import { Router } from "express";
import {
  githubtokenController,
  githubtokenListController,
} from "../controllers/githubtoken.controller";

const tokengitRoutes = Router();

tokengitRoutes.post("", githubtokenController);
tokengitRoutes.get("", githubtokenListController);

export default tokengitRoutes;
