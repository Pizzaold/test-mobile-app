import { View, Text, SafeAreaView } from "react-native";
import styles from "./style";
import Header from "@/components/Header";

export default function Profile() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Profile" showBack={true} showLogout={true} />
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
}
