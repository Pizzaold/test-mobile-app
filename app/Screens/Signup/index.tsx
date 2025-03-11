import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox"
import Seperator from "@/components/Separator";
import { useState } from "react";
import Button from "@/components/Button";
import GoogleLogin from "@/components/GoogleLogin";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [checked, setChecked] = useState(false)
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Header title="Sign Up" onBackPress={handleBackPress} />
        <Input label="Name" placeholder="John Doe"/>
        <Input label="Email" placeholder="some@one.com"/>
        <Input isPassword label="Password" placeholder="******"/>
        <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked}/>
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text></Text>
      </View>
      <Button style={styles.button} title="Sign In" onPress={() => {}} />
      <Seperator text='Or sign up with' />
      <GoogleLogin />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin" as never)}>
          <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
