import { View, Text } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox"
import { router } from "expo-router";
import { useState } from "react";

const Signup = () => {
  const [checked, setChecked] = useState(false)
  
  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Header title="Sign Up" onBackPress={handleBackPress} />
      <Input label="Name" placeholder="John Doe"/>
      <Input label="Email" placeholder="some@one.com"/>
      <Input isPassword label="Password" placeholder="******"/>
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked}/>
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text></Text>
      </View>
    </View>
  );
};

export default Signup;
