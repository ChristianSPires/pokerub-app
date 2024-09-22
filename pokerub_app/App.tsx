import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import HomeScreen from "./src/pages/PokemonListScreen/pokemonListScreen";
import FavoritesScreen from "./src/pages/FavoritesListScreen/favoritesListScreen";
import Header from "./src/components/header/header";
import { FavoritesProvider } from "./src/context/favoritesContext";
import { CurrentPokemonChainProvider } from "./src/context/currentPokemonChain";

type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <FavoritesProvider>
      <CurrentPokemonChainProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CurrentPokemonChainProvider>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({});
