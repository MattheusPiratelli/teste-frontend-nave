import { sleep } from "../utils";

import api from "./index";

export const LoginAuth = async ({ email, password }) => {
  if (process.env.NODE_ENV === "production") {
    await sleep(1000);

    if (email === "bernardonasciimento@gmail.com" && password === "123") {
      return {
        statusCode: 200,
        message: "Usuário autenticado",
        error: null,
      };
    }

    if (email === "mattheuspiratelli@gmail.com" && password === "321") {
      return {
        statusCode: 200,
        message: "Usuário autenticado",
        error: null,
      };
    }

    return {
      statusCode: 404,
      message: "Usuário não encontrado",
      error: "ERROR USER NOT LOCATED",
    };
  } else {
    const body = {
      email,
      password,
    };

    return api
      .post("/auth/login", JSON.stringify(body))
      .then((res) => {
        const { data, status } = res;

        localStorage.setItem("token", JSON.stringify(data.token));

        return {
          statusCode: status,
          message: "Usuário autenticado",
        };
      })
      .catch((error) => {
        const { data, status } = error.response;

        return {
          statusCode: status,
          message: data.message,
          error: data.message,
        };
      });
  }
};
