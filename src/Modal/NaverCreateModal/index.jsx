import "./styles.css";

export const NaverCreateModal = ({ setOpen, callBack }) => {
  const handleClick = () => {
    setOpen(false);

    if (callBack) {
      callBack();
    }
  };

  return (
    <div className="naver_create_modal">
      <h1>Naver criado</h1>
      <p>Naver criado com sucesso</p>
      <button onClick={handleClick}>
        <img src="./close.png" alt="fechar" />
      </button>
    </div>
  );
};
