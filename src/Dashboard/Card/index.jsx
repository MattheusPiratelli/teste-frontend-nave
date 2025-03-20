import { useNavigate } from "react-router";

import "./styles.css";

export const Card = ({ id, name, employ, setOpen, }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="card_container">
      <img onClick={handleClick} src={`avatar_${id}.png`} alt="juliano" />
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
