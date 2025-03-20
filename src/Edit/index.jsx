import { useNavigate } from "react-router";
import "./styles.css";
import { Header } from "../Header";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { useState } from "react";

export const Edit = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleSave = () => {
    setOpen(true);
  };

  return (
    <div className="register_container">
      <Modal open={open} setOpen={setOpen} type={"NaverUpdate"} />
      <Header />
      <div className="register_wrapper">
        <button className="register_goback" onClick={handleClick}>
          <img src="./return.png" alt="voltar" />
          <h1 className="add"> Editar Naver </h1>
        </button>
        <div className="register_inputs">
          <Input label={"Nome"} />
          <Input label={"Cargo"} />
          <Input label={"Idade"} />
          <Input label={"Tempo de empresa"} />
          <Input label={"Projetos que participou"} />
          <Input label={"URL da foto do Naver"} />
        </div>
        <div className="register_save">
          <button onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
};
