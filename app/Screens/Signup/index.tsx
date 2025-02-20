import { View } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles}>
      <Header title="Sign Up" onBackPress={handleBackPress} />
    </View>
  );
};

export default Signup;
