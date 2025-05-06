import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <AppContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
