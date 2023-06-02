import { Request, Response } from "express";
import { AppError } from "../errors/App.error";
import handleError from "../errors/handleError";
import fetchUser from "../services/githubtoken/fetchUser.service";
import exchangeCodeForAccessToken from "../services/githubtoken/exchangeCodeForAccessToken.service";
import githubtokenList from "../services/githubtoken/githubtokenList.service";

export const githubtokenController = async (req: Request, res: Response) => {
  try {
    const code = req.body.code as string;

    const token: string | string[] = await exchangeCodeForAccessToken(code);
    // console.log(token);
    const user = await fetchUser(token);

    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};

export const githubtokenListController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await githubtokenList();

    return res.status(200).json(data);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, req, res);
    }
  }
};
