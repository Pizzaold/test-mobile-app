import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./style";

const Header = ({ title, onBackPress }: { title: string, onBackPress: () => void }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image style={styles.backIcon} source={require("../../assets/images/back.png")} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;