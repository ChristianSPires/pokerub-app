import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    margin: "auto",
  },
  beforeEvolution: {
    backgroundColor: "#e2e2e2",
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
    backgroundColor: "#e2e2e2",
    padding: 10,
    borderRadius: 30,
  },
  evolveText: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  afterEvolution: {
    backgroundColor: "#e2e2e2",
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
});
