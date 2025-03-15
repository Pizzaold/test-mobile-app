import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./favoritesStyle";
import Header from "@/components/Header";
import FavoriteItem from "@/components/FavoriteItem";
import { products } from "@/utils/data";

export default function Favorites() {
    const renderItem = ({item}: {item: any}) => {
        return (
            <FavoriteItem item={item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" showBack={false} showSearch={true} />
                <FlatList 
                    data={products} 
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
} 