import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import categories from "@/utils/categories";
import CategoryBox from "@/components/CategoryBox";

export default function Home() {

    const renderCategoriItem = (item: any, index: number) => {
        return (
            <CategoryBox title={item.title} image={item.image} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Find All You Need" showBack={false} showSearch={true} />
                <FlatList
                    style={styles.list} horizontal showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({item, index}) => renderCategoriItem(item, index)}
                />
            </View>
        </SafeAreaView>
    )
}
