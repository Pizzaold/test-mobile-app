import { useState } from "react";
import styles from "./style";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const Input = ({ label, placeholder, isPassword = false }: { label: string, placeholder: string, isPassword?: boolean}) => {
    const [isPasswordVisable, setIsPasswrodVisable] = useState(false)

    const onEyePress = () => {
        setIsPasswrodVisable(!isPasswordVisable)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisable} placeholder={placeholder} style={styles.input} />
            {
                isPassword ? (
                <TouchableOpacity onPress={onEyePress}>
                    <Image style={styles.eye} source={isPasswordVisable ? require("@/assets/images/eye_closed.png") : require("@/assets/images/eye.png")} />
                </TouchableOpacity>
                ) : null
            }
      </View>
    </View>
  );
};

export default Input;