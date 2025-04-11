import { Delete } from "../../services/Naver";

import "./styles.css";

export const NaverDeleteModal = ({ setOpen, id, callBack }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const res = await Delete(id);

    if (res.statusCode === 200) {
      setOpen(false);
      callBack && callBack(id);
    }
  };

  return (
    <div className="naver_delete_modal">
      <h1>Excluir Naver</h1>
      <p>Tem certeza que deseja excluir este Naver?</p>
      <div className="container">
        <button onClick={handleCancel} className="cancelar">
          Cancelar
        </button>
        <button onClick={handleDelete} className="excluir primary">
          Excluir
        </button>
      </div>
    </div>
  );
};
