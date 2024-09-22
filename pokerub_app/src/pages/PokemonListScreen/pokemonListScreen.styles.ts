import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 20,
  },
  boxInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  paginationBox: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    height: 40,
    gap: 10,
  },
  paginationCollumn: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    height: 20,
    width: 20,
    transform: [{ rotate: "180deg" }],
  },
  frontArrow: {
    height: 20,
    width: 20,
  },
  paginationNumber: {
    fontSize: 16,
    fontWeight: "500",
  },
  disabledButton: {
    opacity: 0.25,
  },
});
