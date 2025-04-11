import { useEffect, useState } from "react";

import { Read } from "../services/Naver";

import { Add } from "./Add";
import { Card } from "./Card";
import { Header } from "../Header";
import { Modal } from "../Modal";

import "./styles.css";

export const Dashboard = () => {
  const [navers, setNavers] = useState([]);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();
  const [naverId, setNaverId] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await Read();

    if (res.statusCode === 200) {
      setNavers(res.data);
    }
  };

  const onOpenModal = (typeModal, id) => {
    id && setNaverId(id);
    setType(typeModal);
    setOpen(true);
  };

  const callBack = (id) => {
    if (id) {
      const newNavers = navers.filter((el) => !(el.id === id));
      setNavers(newNavers);
    }
  };

  return (
    <div className="dashboard_container">
      <Modal
        open={open}
        setOpen={setOpen}
        type={type}
        id={naverId}
        callBack={callBack}
      />
      <Header />
      <Add />
      <div className="dashboard_wrapper">
        {navers.map((el) => (
          <Card
            id={el.id}
            avatar={el.avatar}
            cargo={el.cargo}
            idade={el.idade}
            nome={el.nome}
            projetos={el.projetos}
            tempo_de_empresa={el.tempo_de_empresa}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
};
