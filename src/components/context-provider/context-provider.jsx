import { useState, useEffect } from "react";

import globalContext from "../../contexts/global-context";

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }) {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/advices.json");
        const data = await response.json();
        setAdvices(data);
      } catch (err) {
        console.error("Erreur lors de la recuperation des donnees: ", err);
      }
    };

    fetchData();
  }, []);
  console.log(advices);
  return (
    <>
      <globalContext.Provider value={advices}>
        {children}
      </globalContext.Provider>
    </>
  );
}
