// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('None');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalVariable = () => useContext(GlobalContext);
