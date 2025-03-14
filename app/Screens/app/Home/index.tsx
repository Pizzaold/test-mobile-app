import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import styles from "./style";
import Header from "@/components/Header";
import categories from "@/utils/categories";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import products from "@/utils/products";
import { useState, useEffect } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProducts, setSelectedProducts] = useState<any[]>(products);
    const [keyword, setKeyword] = useState<string>('');

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.category === Number(selectedCategory));
            setSelectedProducts(updatedSelectedProducts);
        } else if (selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.category === Number(selectedCategory) && product?.title.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.title.toLowerCase().includes(keyword.toLowerCase()));
            setSelectedProducts(updatedSelectedProducts);
        } else if (!selectedCategory && !keyword) {
            setSelectedProducts(products);
        } else {
            setSelectedProducts(products);
        }
    }, [selectedCategory, keyword]);

    const renderCategoriItem = (item: any, index: number) => {
        return (
            <CategoryBox title={item.title} image={item.image}
            onPress={() => setSelectedCategory(item.id)}
            isSelected={selectedCategory === item.id}/>
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
