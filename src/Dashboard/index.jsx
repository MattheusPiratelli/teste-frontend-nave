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

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await Read();

    if (res.statusCode === 200) {
      setNavers(res.data);
    }
  };

  const onOpenModal = (typeModal) => {
    setType(typeModal);
    setOpen(true);
  };

  return (
    <div className="dashboard_container">
      <Modal open={open} setOpen={setOpen} type={type} />
      <Header />
      <Add />
      <div className="dashboard_wrapper">
        {navers.map((el, index) => (
          <Card
            id={index}
            avatar={el.avatar}
            name={el.nome}
            employ={el.cargo}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
};
