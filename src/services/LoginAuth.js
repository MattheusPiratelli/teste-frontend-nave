import { sleep } from "../utils";

export const LoginAuth = async ({ email, password }) => {
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
};
