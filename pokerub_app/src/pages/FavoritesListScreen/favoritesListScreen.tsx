import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { style } from "./favoritesListScreen.styles";
import searchIcon from "../../assets/searchIcon.png";
import FavoriteCard from "../../components/favoriteCard/favoriteCard";

export default function FavoritesListScreen() {
  return (
    <View style={style.cardList}>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </View>
  );
}
