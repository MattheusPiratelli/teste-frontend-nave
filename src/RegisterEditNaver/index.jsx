import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Create, Update } from "../services/Naver";

import { Header } from "../Header";
import { Input } from "../Input";
import { Modal } from "../Modal";

import "./styles.css";

const NAVER = {
  nome: "",
  cargo: "",
  idade: "",
  tempo_de_empresa: "",
  projetos: "",
  avatar: "https://i.pravatar.cc/300?u=",
};

export const RegisterEditNaver = ({ naverEdit, pageName, modalType }) => {
  const [naver, setNaver] = useState(NAVER);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (naverEdit) {
      setNaver(naverEdit);
    }
  }, [naverEdit]);

  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleSave = async () => {
    const res = naverEdit ? await Update(naver) : await Create(naver);

    if (res.statusCode === 201 || res.statusCode === 200) {
      setOpen(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNaver({
      ...naver,
      [name]: value,
    });
  };

  const onNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="register_container">
      <Modal
        open={open}
        setOpen={setOpen}
        type={modalType}
        callBack={onNavigate}
      />
      <Header />
      <div className="register_wrapper">
        <button className="register_goback" onClick={handleClick}>
          <img src="./return.png" alt="voltar" />
          <h1 className="add">{pageName}</h1>
        </button>
        <div className="register_inputs">
          <Input
            name="nome"
            label={"Nome"}
            value={naver.nome}
            onChange={handleChange}
          />
          <Input
            name="cargo"
            label={"Cargo"}
            value={naver.cargo}
            onChange={handleChange}
          />
          <Input
            name="idade"
            label={"Idade"}
            value={naver.idade}
            onChange={handleChange}
          />
          <Input
            name="tempo_de_empresa"
            label={"Tempo de empresa"}
            value={naver.tempo_de_empresa}
            onChange={handleChange}
          />
          <Input
            name="projetos"
            label={"Projetos que participou"}
            value={naver.projetos}
            onChange={handleChange}
          />
          <Input
            name="avatar"
            label={"URL da foto do Naver"}
            value={naver.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="register_save">
          <button className="primary" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
