import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    color: "#FCA34D",
    textDecorationLine: "underline",
  },
  titleContainer: {
    marginVertical: 54,
    alignItems: "center",
  },
  signUpText: {
    textAlign: "center",
    color: "#4F63AC",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  }
});

export default styles;