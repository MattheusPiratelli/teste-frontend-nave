import { useEffect } from "react";

import { NaverCreateModal } from "./NaverCreateModal";
import { NaverUpdateModal } from "./NaverUpdatedModal";
import { NaverDeleteModal } from "./NaverDeleteModal";
import { NaverAvatarModal } from "./NaverAvatarModal";

import "./styles.css";

export const Modal = ({ open, type, setOpen, callBack }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const typesModal = {
    NaverCreate: <NaverCreateModal setOpen={setOpen} callBack={callBack} />,
    NaverUpdate: <NaverUpdateModal setOpen={setOpen} callBack={callBack} />,
    NaverDelete: <NaverDeleteModal setOpen={setOpen} callBack={callBack} />,
    NaverAvatar: <NaverAvatarModal setOpen={setOpen} callBack={callBack} />,
  };

  const handleClick = () => {
    setOpen(false);

    if (callBack) {
      callBack();
    }
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
