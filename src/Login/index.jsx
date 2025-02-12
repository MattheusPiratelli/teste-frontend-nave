import "./styles.css";

export const Login = () => {
  return (
    <div className="login_container">
      <div className="login_card">
        <img src="/logo.png" alt="Logo Nave.RS" />
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="text" />
        </div>
        
        <div>
          <button className="primary">Entrar</button>
        </div>
      </div>
    </div>
  );
};
