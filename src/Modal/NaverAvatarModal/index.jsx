import "./styles.css";

export const NaverAvatarModal = ({ setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="naver_avatar_modal">
      <h1>AVATAR</h1>
    </div>
  );
};
