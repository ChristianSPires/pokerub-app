import React from "react";
import { Text, View, FlatList } from "react-native";
import FavoriteCard from "../../components/favoriteCard/favoriteCard";
import { useFavorites } from "../../context/favoritesContext";
import { style } from "./favoritesListScreen.styles";

export default function FavoritesListScreen() {
  const { favorites } = useFavorites();

  return (
    <View>
      {favorites.length === 0 ? (
        <Text style={style.notFoundPokemonsText}>No favorite Pokemons</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FavoriteCard pokemon={item} />}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        />
      )}
    </View>
  );
}
