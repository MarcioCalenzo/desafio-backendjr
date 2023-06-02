import { Router } from "express";
import multer from "multer";
import {
  personCreateController,
  personListController,
} from "../controllers/persons.controller";

const personRoutes = Router();

const verifyCsvFile = multer({ dest: "uploads/" });

personRoutes.post("", verifyCsvFile.single("csvFile"), personCreateController);
personRoutes.get("", personListController);

export default personRoutes;
