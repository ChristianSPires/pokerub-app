import React, { createContext, useState, useContext, useEffect } from "react";
import { PokemonType } from "../types/pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FavoritesContextType = {
  favorites: PokemonType[];
  toggleFavorite: (pokemon: PokemonType) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const FAVORITES_STORAGE_KEY = "@favorite_pokemons";

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<PokemonType[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY
        );
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Failed to load favorites from storage:", error);
      }
    };
    loadFavorites();
  }, []);

  const toggleFavorite = async (pokemon: PokemonType) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.find((fav) => fav.id === pokemon.id)) {
        updatedFavorites = prevFavorites.filter((fav) => fav.id !== pokemon.id);
      } else {
        updatedFavorites = [...prevFavorites, pokemon];
      }

      AsyncStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(updatedFavorites)
      )
      .catch((error) => {
        console.error("Failed to save favorites:", error);
      });

      return updatedFavorites;
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
