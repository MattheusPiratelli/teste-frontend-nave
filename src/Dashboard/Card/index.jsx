import "./styles.css";

export const Card = () => {
  return (
    <div className="card_container">
      <img src="/juliano.png" alt="juliano" />
      <h1>Juliano Reis</h1>
      <p>Front-end Developer</p>
      <div>
        <img className="icone" src="/lixeira.png" alt="lixeira" />
        <img className="icone" src="/editar.png" alt="editar" />
      </div>
    </div>
  );
};
