import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [UserName, setUserName] = useState();

  return (
    <UserContext.Provider
      value={{
        UserName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
