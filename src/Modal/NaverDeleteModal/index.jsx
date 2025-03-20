import "./styles.css";

export const NaverDeleteModal = ({ setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="naver_delete_modal">
      <h1>Excluir Naver</h1>
      <p>Tem certeza que deseja excluir este Naver?</p>
      <div className="container">
        <button onClick={handleClick} className="cancelar">
          Cancelar
        </button>
        <button onClick={handleClick} className="excluir">
          Excluir
        </button>
      </div>
    </div>
  );
};
