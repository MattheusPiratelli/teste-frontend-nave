import { useState } from "react";
import { useNavigate } from "react-router";
import ReactLoading from "react-loading";

import { Input } from "../Input";

import { LoginAuth } from "../services/LoginAuth";

import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!email || !password) {
      alert("Digite um email e senha válidos");
      return;
    }

    setIsLoading(true);

    const res = await LoginAuth({ email, password });

    const { statusCode, message } = res;

    if (statusCode === 200) {
      navigate("/dashboard");
    } else {
      alert(message);
    }

    setIsLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login_container">
      <div className="login_card">
        <img src="/logo.png" alt="Logo Nave.RS" />
        <Input
          name={"email"}
          label={"E-mail"}
          value={email}
          onChange={handleChange}
        />
        <Input
          name={"password"}
          label={"Senha"}
          value={password}
          onChange={handleChange}
          type="password"
        />
        <div>
          <button
            className="primary"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <ReactLoading type="spin" color="#fff" height={20} width={20} />
            ) : (
              "Entrar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
