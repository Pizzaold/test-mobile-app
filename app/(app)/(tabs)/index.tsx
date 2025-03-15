import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import styles from "./indexStyle";
import Header from "@/components/Header";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import { categories, products } from "@/utils/data";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [keyword, setKeyword] = useState<string>("");

    const renderCategoriItem = (item: any, index: number) => {
        const isSelected = selectedCategory === item.id;
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item.id)}
                isSelected={isSelected}
                title={item.title}
                image={item.image}
            />
        )
    }

    const renderProductItem = (item: any, index: number) => {
        return (
            <ProductHomeItem {...item}
            onPress={() => setSelectedProducts([...selectedProducts, item.id])}
            isSelected={selectedProducts.includes(item.id)}/>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Find All You Need" onSearchKeyword={setKeyword} keyword={keyword} showBack={false} showSearch={true} />
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
                    data={selectedProducts} 
                    renderItem={({item, index}) => renderProductItem(item, index)}
                    ListFooterComponent={<View style={{height: 450}} />}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                />
            </View>
        </SafeAreaView>
    )
} 