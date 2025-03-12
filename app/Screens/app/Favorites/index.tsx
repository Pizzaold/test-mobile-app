import { View, Text, SafeAreaView } from "react-native";
import styles from "./style";
import Header from "@/components/Header";

export default function Favorites() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" showBack={false} showSearch={true} />
                <Text>Favorites</Text>
            </View>
        </SafeAreaView>
    )
}
