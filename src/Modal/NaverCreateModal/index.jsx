import "./styles.css";

export const NaverCreateModal = ( {setOpen} ) => {
const handleClick = () => {
  setOpen(false);
}

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
