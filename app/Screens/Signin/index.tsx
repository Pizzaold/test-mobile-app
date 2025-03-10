import { View, Text } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Seperator from "@/components/Separator";
import Button from "@/components/Button";
import GoogleLogin from "@/components/GoogleLogin";

const Signin = () => {
  
  const handleBackPress = () => {

  };

  return (
    <View style={styles.container}>
      <Header title="Sign In" onBackPress={handleBackPress} />
      <Input label="Email" placeholder="some@one.com"/>
      <Input isPassword label="Password" placeholder="******"/>
      <Button style={styles.button} title="Sign In" onPress={() => {}} />
      <Seperator text='Or sign up with' />
      <GoogleLogin />
      <Text style={styles.footerText}>Don't have an account? 
        <Text style={styles.footerLink}> Sign up</Text>
      </Text>
    </View>
  );
};

export default Signin;
