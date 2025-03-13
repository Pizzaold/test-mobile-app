import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import categories from "@/utils/categories";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import products from "@/utils/products";

export default function Home() {

    const renderCategoriItem = (item: any, index: number) => {
        return (
            <CategoryBox title={item.title} image={item.image} />
        )
    }

    const renderProductItem = (item: any, index: number) => {
        return (
            <ProductHomeItem {...item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Find All You Need" showBack={false} showSearch={true} />
                <FlatList
                    style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({item, index}) => renderCategoriItem(item, index)}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
                <FlatList 
                    style={styles.list}
                    numColumns={2}
                    data={products} 
                    renderItem={({item, index}) => renderProductItem(item, index)}
                    keyExtractor={(item) => item.id.toString()}
                    ListFooterComponent={<View style={{height: 450}} />}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                />
            </View>
        </SafeAreaView>
    )
}
