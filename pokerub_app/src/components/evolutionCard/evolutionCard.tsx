import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./evolutionCard.styles";
import ArrowIcon from "../../assets/arrowIcon.png";
import { getPokemonImage } from "../../services/pokemonService";
import { capitalize } from "../../utils/strings";
import { useCurrentPokemonChain } from "../../context/currentPokemonChain";

export default function EvolutionCard({ beforeEvolution, afterEvolution }) {
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const { name, setName } = useCurrentPokemonChain();

  useEffect(() => {
    async function fetchImages() {
      const beforeImage = await getPokemonImage(beforeEvolution);
      const afterImage = await getPokemonImage(afterEvolution);
      setBeforeImage(beforeImage);
      setAfterImage(afterImage);
    }

    fetchImages();
  }, [beforeEvolution, afterEvolution]);

  return (
    <View style={style.container}>
      <View
        style={[
          style.beforeEvolution,
          capitalize(name) === capitalize(beforeEvolution) && style.active,
        ]}
      >
        {beforeImage && (
          <Image
            source={{ uri: beforeImage }}
            alt="Before Evolution Pokémon"
            style={style.pokemonImageBeforeEvolution}
          />
        )}
        <Text style={style.pokemonNameBeforeEvolution}>
          {capitalize(beforeEvolution)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setName(capitalize(afterEvolution))}
        disabled={capitalize(name) !== capitalize(beforeEvolution)}
      >
        <View
          style={[
            style.evolutionBox,
            capitalize(name) === capitalize(beforeEvolution) && style.active,
          ]}
        >
          <Image source={ArrowIcon} alt="Arrow Icon" style={style.icon} />
          {capitalize(name) === capitalize(beforeEvolution) ? (
            <Text style={style.evolveText}>CLICK TO{"\n"}EVOLVE</Text>
          ) : undefined}
        </View>
      </TouchableOpacity>
      <View
        style={[
          style.afterEvolution,
          capitalize(name) === capitalize(afterEvolution) && style.active,
        ]}
      >
        {afterImage && (
          <Image
            source={{ uri: afterImage }}
            alt="After Evolution Pokémon"
            style={style.pokemonImageAfterEvolution}
          />
        )}
        <Text style={style.pokemonNameAfterEvolution}>
          {capitalize(afterEvolution)}
        </Text>
      </View>
    </View>
  );
}
