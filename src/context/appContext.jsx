import { useState } from "react";
import React from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //declaring all global functions to be accessed nby all components accress the app;
  const [state, setState] = useState(null);

  const value = {
    state,
    setState,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
