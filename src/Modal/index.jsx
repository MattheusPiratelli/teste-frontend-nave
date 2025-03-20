import { NaverCreateModal } from "./NaverCreateModal";
import { NaverUpdateModal } from "./NaverUpdatedModal";
import { NaverDeleteModal } from "./NaverDeleteModal";

import "./styles.css";

export const Modal = ({ open, type, setOpen }) => {
  const typesModal = {
    NaverCreate: <NaverCreateModal setOpen={setOpen} />,
    NaverUpdate: <NaverUpdateModal setOpen={setOpen} />,
    NaverDelete: <NaverDeleteModal setOpen={setOpen} />,
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
