import { View, Text, SafeAreaView, FlatList } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import FavoriteItem from "@/components/FavoriteItem";
import products from "@/utils/products";

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
                <FlatList data={products} renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}
