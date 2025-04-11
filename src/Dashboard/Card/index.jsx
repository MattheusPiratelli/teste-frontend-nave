import { useNavigate } from "react-router";

import "./styles.css";

export const Card = ({
  id,
  avatar,
  nome,
  cargo,
  idade,
  projetos,
  tempo_de_empresa,
  onOpenModal,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    const data = {
      id,
      avatar,
      cargo,
      nome,
      idade,
      projetos,
      tempo_de_empresa,
    };

    navigate(`/edit`, {
      state: data,
    });
  };

  const handleDelete = () => {
    onOpenModal("NaverDelete", id);
  };

  const handleClick = () => {
    onOpenModal("NaverAvatar");
  };

  return (
    <div className="card_container">
      <img onClick={handleClick} src={`${avatar}${id}`} alt="avatar" />
      <h1>{nome}</h1>
      <p>{cargo}</p>
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
