import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { style } from "./evolutionCard.styles";
import ArrowIcon from "../../assets/arrowIcon.png";
import Eevee from "../../assets/eevee.png";
import Vaporeon from "../../assets/vaporeon.png";

export default function EvolutionCard() {
  return (
    <View style={style.container}>
      <View style={style.beforeEvolution}>
        <Image
          source={Eevee}
          alt="Pokemon Image"
          style={style.pokemonImageBeforeEvolution}
        />
        <Text style={style.pokemonNameBeforeEvolution}>Eevee</Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("Opa")}>
        <View style={style.evolutionBox}>
          <Image source={ArrowIcon} alt="Arrow Icon" style={style.icon} />
          <Text style={style.evolveText}>CLICK TO{"\n"}EVOLVE</Text>
        </View>
      </TouchableOpacity>
      <View style={style.afterEvolution}>
        <Image
          source={Vaporeon}
          alt="Pokemon Image"
          style={style.pokemonImageAfterEvolution}
        />
        <Text style={style.pokemonNameAfterEvolution}>Vaporeon</Text>
      </View>
    </View>
  );
}
