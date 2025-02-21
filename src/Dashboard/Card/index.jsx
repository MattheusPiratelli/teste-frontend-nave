import "./styles.css";

export const Card = ({ id, name, employ}) => {
  return (
    <div className="card_container">
      <img src={`avatar_${id}.png`} alt="juliano" />
      <h1>{name}</h1>
      <p>{employ}</p>
      <div>
        <img className="icone" src="/lixeira.png" alt="lixeira" />
        <img className="icone" src="/editar.png" alt="editar" />
      </div>
    </div>
  );
};
