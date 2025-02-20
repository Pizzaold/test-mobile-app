import { Text, View, Image } from "react-native";
import styles from "./style";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-image.png")}
        style={styles.image}
      />
      <Text style={styles.title}>You'll Find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>
    </View>
  );
}
