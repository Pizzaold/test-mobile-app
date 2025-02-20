import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Button from "../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleSignUp = () => {
    navigation.navigate("signup");
  };

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

      <Button title="Sign In" onPress={handleSignUp} />

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
