import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./favoriteCard.styles";
import Eevee from "../../assets/eevee.png";

export default function FavoriteCard() {
  return (
    <View style={style.container}>
      <View style={style.imageSection}>
        <Image source={Eevee} alt="Pokemon" style={style.image} />
      </View>
      <View style={style.boxName}>
        <Text style={style.name}>Eevee</Text>
      </View>
    </View>
  );
}
