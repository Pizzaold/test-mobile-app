import { TouchableOpacity, Image, Text, View } from "react-native";
import styles from "./style";

const FavoriteItem = ({item}: {item: any}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <Image source={require("@/assets/images/Close.png")} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default FavoriteItem;
