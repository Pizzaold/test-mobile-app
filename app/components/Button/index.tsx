import { TouchableOpacity, Text } from "react-native";
import styles from "./styel";

const Button = ({ title, onPress }: { title: string, onPress: () => void }) => {

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;  