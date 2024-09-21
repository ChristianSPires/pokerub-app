import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { style } from "./pokemonListScreen.styles";
import searchIcon from "../../assets/searchIcon.png";
import Card from "../../components/card/card";

export default function PokemonListScreen() {
  return (
    <View style={style.container}>
      <Text style={style.title}>PokeRub</Text>
      <View style={style.boxInput}>
        <TextInput style={style.searchInput} />
        <TouchableOpacity onPress={() => Alert.alert("Opa")}>
          <Image source={searchIcon} alt="Search Icon" style={style.icon} />
        </TouchableOpacity>
      </View>
      <Card />
    </View>
  );
}
