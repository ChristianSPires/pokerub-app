import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: "100%",
    backgroundColor: "#2e2e2e",
    paddingHorizontal: 30,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  pokebolaIcon: {
    width: 40,
    height: 40,
  },
  links: {
    color: "#fff",
    fontSize: 18,
  },
});
