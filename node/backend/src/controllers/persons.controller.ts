import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import personCreateService from "../services/persons/personsCreate.service";
import listPersonService from "../services/persons/personsList.service";

export const personCreateController = async (req: Request, res: Response) => {
  try {
    const csvFile = req.file.path;

    const newPerson = await personCreateService(csvFile);

    return res.status(201).json(newPerson);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

export const personListController = async (req: Request, res: Response) => {
  try {
    const listPerson = await listPersonService();

    return res.status(200).json(listPerson);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};
