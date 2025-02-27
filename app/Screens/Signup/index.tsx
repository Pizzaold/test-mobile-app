import { View } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { router } from "expo-router";

const Signup = () => {
  
  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles}>
      <Header title="Sign Up" onBackPress={handleBackPress} />
      <Input label="Name" placeholder="John Doe"/>
      <Input label="Email" placeholder="some@one.com"/>
      <Input isPassword label="Password" placeholder="******"/>
    </View>
  );
};

export default Signup;
