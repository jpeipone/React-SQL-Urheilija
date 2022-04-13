import React, { useContext, useEffect } from "react";
import Urheilijantieto from "./Urheilijantieto";
import yhteystiedotContext from "../context/YhteystiedotContext";
const Urheilijantiedot = () => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  console.log(YhteystiedotContext);
  useEffect(() => {
    YhteystiedotContext.getYhteystiedot();
    console.log(YhteystiedotContext);
  }, []);
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Urheilijantiedot</span>
      </h1>
      <React.Fragment>
        {YhteystiedotContext.yhteystiedot.length
          ? YhteystiedotContext.yhteystiedot.map((yhteystieto) => (
              <Urheilijantieto key={yhteystieto.id} yhteystieto={yhteystieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijantiedot;
