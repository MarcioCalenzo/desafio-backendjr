import { AppError } from "../../errors/App.error";
import axios from "axios";

const exchangeCodeForAccessToken = async (code: string) => {
  try {
    const GITHUB_ACCESS_TOKEN_URL =
      "https://github.com/login/oauth/access_token";
    const params = {
      code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:1234/",
      client_id: "8845fa18c5e71ce9464a",
      client_secret: "284be4a63a10c5cb243fda0f67170aed3b4dc86a",
    };

    const { data } = await axios.post(GITHUB_ACCESS_TOKEN_URL, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedData = parseQueryString(data);

    return parsedData.access_token;
  } catch (error) {
    throw new AppError("Erro ao buscar token de acesso com o code", 400);
  }
};

const parseQueryString = (queryString: string) => {
  const params = new URLSearchParams(queryString);
  const parsedData: { [key: string]: string } = {};

  for (const [key, value] of params) {
    parsedData[key] = value;
  }

  return parsedData;
};

export default exchangeCodeForAccessToken;
