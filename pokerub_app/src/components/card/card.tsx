import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./card.styles";
import Eevee from "../../assets/eevee.png";
import FilledStar from "../../assets/filledStar.png";
import EmptyStar from "../../assets/emptyStar.png";
import InfoModal from "../modals/infoModal/infoModal";
import EvolutionModal from "../modals/evolutionModal/evolutionModal";

export default function PokemonListScreen() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isEvolutionModalVisible, setIsEvolutionModalVisible] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
  };

  const pokemonDetails = {
    pokemonType: "Normal",
    height: "0.3m",
    weight: "14.3 lbs",
    category: "Evolution",
    abilities: ["Run Away", "Adaptability"],
  };

  return (
    <View style={style.card}>
      <View style={style.infoSection}>
        <View style={style.boxName}>
          <Text style={style.name}>Eevee</Text>
          <TouchableOpacity
            style={style.favoriteIcon}
            onPress={handleFavoriteToggle}
          >
            <Image
              source={isFavorited ? FilledStar : EmptyStar}
              alt={isFavorited ? "Filled Star" : "Empty Star"}
              style={style.star}
            />
          </TouchableOpacity>
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity
            style={style.button}
            onPress={() => setIsInfoModalVisible(true)}
          >
            <Text style={style.textButton}>INFO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => setIsEvolutionModalVisible(true)}
          >
            <Text style={style.textButton}>EVOLUTION</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.imageSection}>
        <Image source={Eevee} alt="Pokemon" style={style.image} />
      </View>

      <InfoModal
        visible={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
        pokemonType={pokemonDetails.pokemonType}
        height={pokemonDetails.height}
        weight={pokemonDetails.weight}
        category={pokemonDetails.category}
        abilities={pokemonDetails.abilities}
      />

      <EvolutionModal
        visible={isEvolutionModalVisible}
        onClose={() => setIsEvolutionModalVisible(false)}
      />
    </View>
  );
}
