import { useState, useEffect } from "react";

import globalContext from "../../contexts/global-context";

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    fetch(
      "https://github.com/Joe-Itax/advice-generator-app-react/blob/main/src/data/advices.json"
    )
      .then((response) => response.json())
      .then((data) => setAdvices(data))
      .catch((err) =>
        console.error("Erreur lors de la récuperation de données: ", err)
      );
  }, []);

  return (
    <>
      <globalContext.Provider value={advices}>
        {children}
      </globalContext.Provider>
    </>
  );
}
