import { createContext, useContext, useState } from "react";

const defaultState = {
  isLoading: false,
  setIsLoading: () => {},
};

const MyContext = createContext(defaultState);

export const MyContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MyContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

export function useMyContext() {
  const myContext = useContext(MyContext);

  if (myContext === null) {
    throw new Error("No MyContext.Provider found.");
  }

  return myContext;
}
