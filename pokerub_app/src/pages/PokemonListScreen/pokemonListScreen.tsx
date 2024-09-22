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
import simpleArrow from "../../assets/simpleArrow.png";

export default function PokemonListScreen() {
  const [pokemonList, setPokemonList] = useState<PokemonResponseType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredPokemonList, setFilteredPokemonList] = useState<
    PokemonResponseType[]
  >([]);
  const [previousPaginationLink, setPreviousPaginationLink] =
    useState<string>("");
  const [nextPaginationLink, setNextPaginationLink] = useState<string>("");
  const [paginationLink, setPaginationLink] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPokemonList() {
      setIsLoading(true);

      try {
        const list = await getPokemonList(paginationLink);

        const detailedList = await Promise.all(
          list.results.map(async (pokemon) => {
            const pokemonData = await getPokemon(
              pokemon.url.split("/").slice(-2, -1)[0]
            );
            return pokemonData;
          })
        );

        setPreviousPaginationLink(list.previous);
        setNextPaginationLink(list.next);
        setPokemonList(detailedList);
        setFilteredPokemonList(detailedList);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemonList();
  }, [paginationLink]);

  useEffect(() => {
    async function handleSearch() {
      if (searchText) {
        try {
          setIsLoading(true);

          const pokemonData = await getPokemon(searchText.toLowerCase());

          if (pokemonData) {
            setFilteredPokemonList([pokemonData]);
          } else {
            setFilteredPokemonList([]);
          }
        } catch (error) {
          console.error("Error searching Pokémon:", error);
          setFilteredPokemonList([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setFilteredPokemonList(pokemonList);
      }
    }

    handleSearch();
  }, [searchText, pokemonList]);

  const handlePagination = (link: string, direction: string) => {
    setCurrentPage((prev) => (direction === "next" ? prev + 1 : prev - 1));
    setPaginationLink(link);
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.title}>PokeRub</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={() => {}}>
            <Image source={searchIcon} alt="Search Icon" style={style.icon} />
          </TouchableOpacity>
        </View>
        <View style={style.paginationBox}>
          <TouchableOpacity
            style={[
              style.paginationCollumn,
              (!previousPaginationLink || isLoading) && style.disabledButton,
            ]}
            onPress={() => handlePagination(previousPaginationLink, "previous")}
            disabled={!previousPaginationLink || isLoading}
          >
            <View>
              <Image
                style={style.backArrow}
                source={simpleArrow}
                alt="Back Arrow"
              />
            </View>
          </TouchableOpacity>
          <View style={style.paginationCollumn}>
            <Text style={style.paginationNumber}>{currentPage}</Text>
          </View>
          <TouchableOpacity
            style={[
              style.paginationCollumn,
              (!nextPaginationLink || isLoading) && style.disabledButton,
            ]}
            onPress={() => handlePagination(nextPaginationLink, "next")}
            disabled={!nextPaginationLink || isLoading}
          >
            <View>
              <Image
                style={style.frontArrow}
                source={simpleArrow}
                alt="Front Arrow"
              />
            </View>
          </TouchableOpacity>
        </View>
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon: PokemonResponseType, index) => (
            <Card key={index} {...pokemon} />
          ))
        ) : (
          <Text>No Pokémon found.</Text>
        )}
      </View>
    </ScrollView>
  );
}
