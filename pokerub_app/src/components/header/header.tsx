import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { style } from "./header.styles";
import pokebolaIcon from "../../assets/pokebolaIcon.png";

type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
};

type HeaderScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Header() {
  const navigation = useNavigation<HeaderScreenProp>();

  return (
    <View style={style.container}>
      <View style={style.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={style.links}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={style.menuItem}>
        <Image style={style.pokebolaIcon} source={pokebolaIcon} />
      </View>
      <View style={style.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
          <Text style={style.links}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
