import { colors } from "@/utils/colour";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
});

export default styles;