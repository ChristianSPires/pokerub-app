import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./favoriteCard.styles";
import { PokemonType } from "../../types/pokemon";
import { capitalize } from "../../utils/strings";

type FavoriteCardProps = {
  pokemon: PokemonType;
};

export default function FavoriteCard({ pokemon }: FavoriteCardProps) {
  return (
    <View style={style.container}>
      <View style={style.imageSection}>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          alt="Pokemon"
          style={style.image}
        />
      </View>
      <View style={style.boxName}>
        <Text style={style.name}>{capitalize(pokemon.name)}</Text>
      </View>
    </View>
  );
}
