import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import fetchUser from "../services/githubtoken/fetchUser.service";
import exchangeCodeForAccessToken from "../services/githubtoken/exchangeCodeForAccessToken.service";

export const githubtokenController = async (req: Request, res: Response) => {
  try {
    const code = req.body.code as string;

    const token = await exchangeCodeForAccessToken(code);
    const user = await fetchUser(token);

    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};
