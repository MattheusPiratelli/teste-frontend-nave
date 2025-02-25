import { NaverCreateModal } from "./NaverCreateModal";
import "./styles.css";

export const Modal = ({ open, type, setOpen }) => {
  const typesModal = {
    NaverCreate: <NaverCreateModal setOpen={setOpen} />,
  };

  const handleClick = () => {
    setOpen(false);
  };

  if (!open) {
    return;
  }
  return (
    <div className="overlay" onClick={handleClick}>
      {typesModal[type]}
    </div>
  );
};
