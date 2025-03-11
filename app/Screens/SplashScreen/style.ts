import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.white,
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
    color: colors.orange,
    textDecorationLine: "underline",
  },
  titleContainer: {
    marginVertical: 54,
    alignItems: "center",
  },
  signUpText: {
    textAlign: "center",
    color: colors.blue,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  }
});

export default styles;