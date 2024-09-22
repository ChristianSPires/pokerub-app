import React, { createContext, useState, useContext } from "react";
import { PokemonType } from "../types/pokemon";

type FavoritesContextType = {
  favorites: PokemonType[];
  toggleFavorite: (pokemon: PokemonType) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokemonType[]>([]);

  const toggleFavorite = (pokemon: PokemonType) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === pokemon.id)) {
        return prevFavorites.filter((fav) => fav.id !== pokemon.id);
      } else {
        return [...prevFavorites, pokemon];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
