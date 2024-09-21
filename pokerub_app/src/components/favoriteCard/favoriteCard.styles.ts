import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "30%",
    backgroundColor: "#e2e2e2",
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 7,
    elevation: 20,
  },
  imageSection: {},
  image: {
    height: 120,
    width: 120,
  },
  boxName: {},
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
});
