import "./styles.css";
import { useNavigate } from "react-router";

export const Add = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="add_container">
      <img src="/navers.png" alt="navers" />
      <button className="primary" onClick={handleClick}>
        Adicionar Naver
      </button>
    </div>
  );
};
