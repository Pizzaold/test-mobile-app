import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profileStyle";
import Header from "@/components/Header";
import { useAuth } from "@/utils/auth";

export default function Profile() {
    const { signOut } = useAuth();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header 
                    title="Profile" 
                    showBack={false} 
                    showLogout={true}
                    onLogout={signOut}
                />
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
} 