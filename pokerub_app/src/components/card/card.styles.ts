import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    height: 150,
    width: "80%",
    backgroundColor: "#e2e2e2",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    margin: "auto",
  },
  infoSection: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  imageSection: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  boxName: {
    width: "85%",
    height: 50,
    marginBottom: 10,
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  name: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#666",
    fontSize: 30,
    fontWeight: "bold",
  },
  favoriteIcon: {
    marginLeft: 10,
    justifyContent: "center",
    zIndex: 1,
  },
  star: {
    height: 30,
    width: 30,
    marginBottom: 7,
  },
  buttonWrapper: {
    display: "flex",
    width: "85%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 5,
  },
  button: {
    backgroundColor: "#666",
    borderRadius: 10,
    padding: 8,
  },
  textButton: {
    color: "#fff",
  },
  image: {
    width: 140,
    height: 140,
  },
});
