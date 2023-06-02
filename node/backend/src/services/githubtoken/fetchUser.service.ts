import axios from "axios";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/App.error";

const fetchUser = async (token: string | string[]) => {
  try {
    const GITHUB_ENDPOINT = "https://api.github.com/user";
    const response = await axios.get(GITHUB_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new AppError("Erro ao fazer a request do usuario no github ", 400);
  }
};

export default fetchUser;
