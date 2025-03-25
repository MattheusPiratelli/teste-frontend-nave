// CRUD - (Create Read Update Delete)
// C - Adicionar
// R - Listar
// U - Atualizar
// D - Excluir

import { sleep } from "../utils";

export const Create = async (naver) => {
  await sleep(1000);

  let newListNaver = [];

  if (localStorage.getItem("navers")) {
    const listNaver = JSON.parse(localStorage.getItem("navers"));
    newListNaver = [...listNaver, naver];
  } else {
    newListNaver = [naver];
  }

  localStorage.setItem("navers", JSON.stringify(newListNaver));

  return {
    statusCode: 200,
    message: "Naver criado",
    error: null,
  };
};

export const Read = async () => {
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
};

export const Update = () => {};

export const Delete = () => {};
