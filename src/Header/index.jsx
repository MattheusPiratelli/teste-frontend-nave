import { useNavigate } from "react-router";
import "./styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header_container">
      <img src="/logo.png" alt="logo" />
      <button onClick={handleClick}>Sair</button>
    </div>
  );
};
