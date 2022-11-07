import React, { createContext, useContext, useEffect, useState } from "react";

const CryptoC = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("PKR");
  const [symbols, setSymbol] = useState("Rs");

  useEffect(() => {
    if (currency === "PKR") setSymbol("Rs");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <CryptoC.Provider value={{ currency, setCurrency, symbols }}>
      {children}
    </CryptoC.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(CryptoC);
};
