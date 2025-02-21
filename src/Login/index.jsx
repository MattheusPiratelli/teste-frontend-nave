import { use } from "react";
import { Input } from "../Input";
import "./styles.css";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="login_container">
      <div className="login_card">
        <img src="/logo.png" alt="Logo Nave.RS" />

        <Input label={"E-mail"} />
        <Input label={"Senha"} />

        <div>
          <button className="primary" onClick={handleClick}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
