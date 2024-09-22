import React, { createContext, useState, useContext } from "react";

type CurrentPokemonChainType = {
  name: string | undefined;
  setName: (name: string) => void;
};

const CurrentPokemonChainContext = createContext<
  CurrentPokemonChainType | undefined
>(undefined);

export const CurrentPokemonChainProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [name, setName] = useState<string | undefined>(undefined);

  return (
    <CurrentPokemonChainContext.Provider value={{ name, setName }}>
      {children}
    </CurrentPokemonChainContext.Provider>
  );
};

export const useCurrentPokemonChain = () => {
  const context = useContext(CurrentPokemonChainContext);
  if (!context) {
    throw new Error(
      "useCurrentPokemonChain must be used within a CurrentPokemonChainProvider"
    );
  }
  return context;
};
