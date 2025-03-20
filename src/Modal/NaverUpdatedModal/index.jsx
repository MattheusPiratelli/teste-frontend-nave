import "./styles.css";

export const NaverUpdateModal = ( {setOpen} ) => {
const handleClick = () => {
  setOpen(false);
}

  return (
    <div className="naver_update_modal">
      <h1>Naver atualizado</h1>
      <p>Naver atualizado com sucesso!</p>
      <button onClick={handleClick}>
        <img src="./close.png" alt="fechar" />
      </button>
    </div>
  );
};
