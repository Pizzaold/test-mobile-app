import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("Signup" as never);
  };

  const handleSignIn = () => {
    navigation.navigate("Signin" as never);
  }

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

      <Button title="Sign In" onPress={handleSignIn} />

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
