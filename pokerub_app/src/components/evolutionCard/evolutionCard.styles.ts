import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    margin: "auto",
  },
  beforeEvolution: {
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 10,
  },
  pokemonImageBeforeEvolution: {
    height: 100,
    width: 100,
  },
  pokemonNameBeforeEvolution: {
    fontSize: 18,
    fontWeight: "500",
  },
  evolutionBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ececec",
    padding: 10,
    borderRadius: 30,
    width: 70,
  },
  evolveText: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  afterEvolution: {
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 10,
  },
  pokemonImageAfterEvolution: {
    height: 100,
    width: 100,
  },
  pokemonNameAfterEvolution: {
    fontSize: 18,
    fontWeight: "500",
  },
  active: {
    borderColor: "yellow",
    backgroundColor: "#c8c8c8",
    borderWidth: 1,
  },
});
