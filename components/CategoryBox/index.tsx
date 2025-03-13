import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./style";

const CategoryBox = ({ title, image, onPress }: { title: string, image: string, onPress?: () => void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox;