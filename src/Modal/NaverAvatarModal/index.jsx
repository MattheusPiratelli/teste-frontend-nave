import "./styles.css";

export const NaverAvatarModal = ({ setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="naver_avatar_modal">      
      <img className="avatar" src="/avatar_1_1.png" alt="" />
      <h1>Juliano Reis</h1>
      <p>Front-end Developer</p>
      <h2>Idade</h2>
      <p>Lorem Ipsum</p>
      <h2>Tempo de empresa</h2>
      <p>Lorem Ipsum</p>
      <h2>Projetos que participou</h2>
      <p>Lorem Ipsum</p>
      <img className="lixeira" src="/lixeira.png" alt="lixeira" />
      <img className="editar" src="/editar.png" alt="editar" />
    </div>
    
  );
};
