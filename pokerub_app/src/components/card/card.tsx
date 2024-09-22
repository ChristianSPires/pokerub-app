import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "./card.styles";
import FilledStar from "../../assets/filledStar.png";
import EmptyStar from "../../assets/emptyStar.png";
import InfoModal from "../modals/infoModal/infoModal";
import EvolutionModal from "../modals/evolutionModal/evolutionModal";
import {
  getPokemon,
  getPokemonEvolutionChain,
  getPokemonSpecies,
} from "../../services/pokemonService";
import {
  PokemonResponseType,
  PokemonType,
  PokemonEvolutionChainType,
} from "../../types/pokemon";
import { useFavorites } from "../../context/favoritesContext";
import { capitalize } from "../../utils/strings";
import { useCurrentPokemonChain } from "../../context/currentPokemonChain";

export default function Card(pokemonResponse: PokemonResponseType) {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isEvolutionModalVisible, setIsEvolutionModalVisible] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [pokemonEvolutionChain, setPokemonEvolutionChain] =
    useState<PokemonEvolutionChainType | null>(null);
  const { setName } = useCurrentPokemonChain();

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonObject = await getPokemon(pokemonResponse.name);
      setPokemon(pokemonObject);
    }
    fetchPokemon();
  }, [pokemonResponse.name]);

  const isFavorited = pokemon && favorites.some((fav) => fav.id === pokemon.id);

  const handleFavoriteToggle = () => {
    if (pokemon) {
      toggleFavorite(pokemon);
    }
  };

  const handleClickEvolution = async () => {
    setName(pokemon.name);

    try {
      const species = await getPokemonSpecies(pokemon.species.name);
      const evolutionChainUrl = species.evolution_chain.url;

      if (!evolutionChainUrl) {
        throw new Error("Evolution chain URL not found.");
      }

      const evolutionChain = await getPokemonEvolutionChain(evolutionChainUrl);

      if (!evolutionChain) {
        throw new Error("Failed to fetch evolution chain.");
      }

      const formattedEvolutionChain: PokemonEvolutionChainType = {
        species: evolutionChain.chain.species,
        evolves_to: evolutionChain.chain.evolves_to,
      };

      setPokemonEvolutionChain(formattedEvolutionChain);
      setIsEvolutionModalVisible(true);
    } catch (error) {
      console.error("Error fetching evolution chain:", error);
    }
  };

  return pokemon !== undefined ? (
    <View style={style.card}>
      <View style={style.infoSection}>
        <View style={style.boxName}>
          <Text style={style.name}>{capitalize(pokemon.name)}</Text>
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
          <TouchableOpacity style={style.button} onPress={handleClickEvolution}>
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
        name={pokemon.name}
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
        evolutionChain={pokemonEvolutionChain}
      />
    </View>
  ) : null;
}
