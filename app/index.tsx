import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "../components/Button";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-image.png")}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign In" onPress={() => {}} />

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
