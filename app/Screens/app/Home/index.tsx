import { View, Text, SafeAreaView } from "react-native";
import styles from "./style";
import Header from "@/components/Header";

export default function Home() {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Find All You Need" showBack={false} showSearch={true} />
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}
