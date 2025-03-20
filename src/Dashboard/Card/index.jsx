import "./styles.css";
import { useNavigate } from "react-router";
// import { Modal } from "../Modal";
import { useState } from "react";

export const Card = ({ id, name, employ}) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();  

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleDelete = () => {
    navigate("/delete")

  };


  return (
    <div className="card_container">
      <img src={`avatar_${id}.png`} alt="juliano" />
      <h1>{name}</h1>
      <p>{employ}</p>
      <div className="button">
        <button className="lixeira" onClick={handleDelete}>
        <img className="icone" src="/lixeira.png" alt="lixeira" />
        </button>
        <button className="editar" onClick={handleEdit}>
        <img className="icone" src="/editar.png" alt="editar" />
        </button>        
      </div>
    </div>
  );
};
