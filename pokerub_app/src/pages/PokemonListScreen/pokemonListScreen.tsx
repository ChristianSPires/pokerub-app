import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { style } from "./pokemonListScreen.styles";
import searchIcon from "../../assets/searchIcon.png";
import Card from "../../components/card/card";
import { getPokemon, getPokemonList } from "../../services/pokemonService";
import { PokemonResponseType } from "../../types/pokemon";

export default function PokemonListScreen() {
  const [pokemonList, setPokemonList] = useState<PokemonResponseType[]>([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const list = await getPokemonList();

      const detailedList = await Promise.all(
        list.map(async (pokemon) => {
          const pokemonData = await getPokemon(
            pokemon.url.split("/").slice(-2, -1)[0]
          );
          return pokemonData;
        })
      );

      setPokemonList(detailedList);
    }
    fetchPokemonList();
  }, []);

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.title}>PokeRub</Text>
        <View style={style.boxInput}>
          <TextInput style={style.searchInput} />
          <TouchableOpacity onPress={() => Alert.alert("Opa")}>
            <Image source={searchIcon} alt="Search Icon" style={style.icon} />
          </TouchableOpacity>
        </View>
        {pokemonList.map((pokemon: PokemonResponseType, index) => (
          <Card key={index} {...pokemon} />
        ))}
      </View>
    </ScrollView>
  );
}
