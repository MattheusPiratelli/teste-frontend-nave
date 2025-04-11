import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { RegisterEditNaver } from "../RegisterEditNaver";

export const Edit = () => {
  const location = useLocation();
  const [naver, setNaver] = useState();

  useEffect(() => {
    if (location) {
      const { state } = location;
      setNaver(state);
    }
  }, [location]);

  return (
    <RegisterEditNaver
      naverEdit={naver}
      pageName={"Editar Naver"}
      modalType={"NaverUpdate"}
    />
  );
};
