import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 230,
    resizeMode: "contain"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  innerTitle: {
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
});

export default styles;