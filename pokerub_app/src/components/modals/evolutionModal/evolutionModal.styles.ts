import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(10,23,55,0.5)",
  },
  modalContent: {
    padding: 30,
    backgroundColor: "#fafafa",
    borderRadius: 15,
    alignItems: "center",
    width: "95%",
    height: "80%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#666",
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textButton: {
    color: "#fff",
  },
  evolutionCardsBox: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginBottom: 15,
  },
});
