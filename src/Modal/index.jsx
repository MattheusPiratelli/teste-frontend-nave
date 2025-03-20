import { useEffect } from "react";

import { NaverCreateModal } from "./NaverCreateModal";
import { NaverUpdateModal } from "./NaverUpdatedModal";
import { NaverDeleteModal } from "./NaverDeleteModal";
import { NaverAvatarModal } from "./NaverAvatarModal";


import "./styles.css";

export const Modal = ({ open, type, setOpen }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const typesModal = {
    NaverCreate: <NaverCreateModal setOpen={setOpen} />,
    NaverUpdate: <NaverUpdateModal setOpen={setOpen} />,
    NaverDelete: <NaverDeleteModal setOpen={setOpen} />,
    NaverAvatar: <NaverAvatarModal setOpen={setOpen} />,
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
