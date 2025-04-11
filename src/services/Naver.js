// CRUD - (Create Read Update Delete)
// C - Adicionar
// R - Listar
// U - Atualizar
// D - Excluir

import { v4 as uuidv4 } from "uuid";

import api from "./index";

import { sleep } from "../utils";

export const Create = async (naver) => {
  if (process.env.NODE_ENV === "production") {
    await sleep(1000);

    let newListNaver = [];

    if (localStorage.getItem("navers")) {
      const listNaver = JSON.parse(localStorage.getItem("navers"));
      newListNaver = [
        ...listNaver,
        {
          ...naver,
          id: uuidv4(),
        },
      ];
    } else {
      newListNaver = [
        {
          ...naver,
          id: uuidv4(),
        },
      ];
    }

    localStorage.setItem("navers", JSON.stringify(newListNaver));

    return {
      statusCode: 201,
      message: "Naver criado",
      error: null,
    };
  } else {
    const token = JSON.parse(localStorage.getItem("token"));

    return api
      .post("/clients", JSON.stringify(naver), {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        const { status, statusText } = res;

        return {
          statusCode: status,
          message: statusText,
          error: null,
        };
      });
  }
};

export const Read = async () => {
  if (process.env.NODE_ENV === "production") {
    await sleep(1000);

    let newListNaver = [];

    if (localStorage.getItem("navers")) {
      newListNaver = JSON.parse(localStorage.getItem("navers"));
    }

    return {
      statusCode: 200,
      message: "",
      error: null,
      data: newListNaver,
    };
  } else {
    const token = JSON.parse(localStorage.getItem("token"));

    return api
      .get("/clients", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        const { data, status } = res;

        return {
          statusCode: status,
          message: "",
          data,
        };
      })
      .catch((error) => {
        const { data, status } = error.response;

        alert(`${status} ${data}`);

        return {
          statusCode: status,
          message: data,
        };
      });
  }
};

export const Update = async (naver) => {
  if (process.env.NODE_ENV === "production") {
    await sleep(1000);

    if (localStorage.getItem("navers")) {
      const listNaver = JSON.parse(localStorage.getItem("navers"));

      const newListNaver = listNaver.map((el) =>
        el.id === naver.id ? naver : el
      );

      localStorage.setItem("navers", JSON.stringify(newListNaver));

      return {
        statusCode: 200,
        message: "Naver editado",
        error: null,
      };
    }
  } else {
    const token = JSON.parse(localStorage.getItem("token"));

    return api
      .put(`/clients/${naver.id}`, JSON.stringify(naver), {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        const { status, statusText } = res;

        return {
          statusCode: status,
          message: statusText,
        };
      });
  }
};

export const Delete = async (id) => {
  if (process.env.NODE_ENV === "production") {
    await sleep(1000);

    if (localStorage.getItem("navers")) {
      const listNaver = JSON.parse(localStorage.getItem("navers"));

      const newListNaver = listNaver.filter((el) => !(el.id === id));

      localStorage.setItem("navers", JSON.stringify(newListNaver));

      return {
        statusCode: 200,
        message: "Naver deletado",
        error: null,
      };
    }
  } else {
    const token = JSON.parse(localStorage.getItem("token"));

    return api
      .delete(`/clients/${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        const { status, statusText } = res;

        return {
          statusCode: status,
          message: statusText,
        };
      });
  }
};
