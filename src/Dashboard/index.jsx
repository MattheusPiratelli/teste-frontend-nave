import { useState } from "react";

import { Add } from "./Add";
import { Card } from "./Card";
import { Header } from "../Header";
import { Modal } from "../Modal";

import "./styles.css";

const persons = [
  { id: 1, name: "Juliano Reis", employ: "Front-end Developer" },
  { id: 2, name: "Gabril do Couto", employ: "Front-end Developer" },
  { id: 3, name: "Eduardo Bittencourt", employ: "Front-end Developer" },
  { id: 4, name: "Gustavo Pinho", employ: "Technology Manager" },
  {
    id: 5,
    name: "Bernardo Nascimento",
    employ: "Front-end Mobile Developer at Neocom",
  },
  { id: 6, name: "Mattheus Piratelli", employ: "Front-end Developer" },
  { id: 7, name: "Mattheus Piratelli", employ: "Front-end Developer" },
];

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();

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
        {persons.map((el) => (
          <Card
            id={el.id}
            name={el.name}
            employ={el.employ}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
};
