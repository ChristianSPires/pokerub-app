import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./card.styles";
import FilledStar from "../../assets/filledStar.png";
import EmptyStar from "../../assets/emptyStar.png";
import InfoModal from "../modals/infoModal/infoModal";
import EvolutionModal from "../modals/evolutionModal/evolutionModal";
import { getPokemon } from "../../services/pokemonService";
import { PokemonResponseType, PokemonType } from "../../types/pokemon";

export default function Card(pokemonResponse: PokemonResponseType) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isEvolutionModalVisible, setIsEvolutionModalVisible] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonType>();

  useEffect(() => {
    async function fetchPokemonList() {
      const pokemonObject = await getPokemon(pokemonResponse.name);
      setPokemon(pokemonObject);
    }
    fetchPokemonList();
  }, []);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
  };

  return pokemon !== undefined ? (
    <View style={style.card}>
      <View style={style.infoSection}>
        <View style={style.boxName}>
          <Text style={style.name}>{pokemon.name}</Text>
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
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          alt="Pokemon"
          style={style.image}
        />
      </View>

      <InfoModal
        visible={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
        pokemonType={pokemon.types
          .map((typeObj) => typeObj.type.name)
          .join(", ")}
        height={`${pokemon.height / 10}m`}
        weight={`${pokemon.weight / 10}kg`}
        category={pokemon.category}
        abilities={pokemon.abilities.map(
          (abilityObj) => abilityObj.ability.name
        )}
      />

      <EvolutionModal
        visible={isEvolutionModalVisible}
        onClose={() => setIsEvolutionModalVisible(false)}
      />
    </View>
  ) : undefined;
}
