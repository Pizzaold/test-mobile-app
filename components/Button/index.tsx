import { TouchableOpacity, Text, ViewStyle  } from "react-native";
import styles from "./style";

const Button = ({ title, onPress, style }: { title: string, onPress?: () => void, style?: ViewStyle }) => {

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;  