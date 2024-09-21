import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cardList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    gap: 10,
    justifyContent: "space-between",
    shadowColor: "#000000",
    shadowOffset: { width: 10, height: 50 },
    shadowOpacity: 0.75,
    shadowRadius: 7,
    elevation: 20,
  },
});
