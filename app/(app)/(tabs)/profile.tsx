import { View, Text, SafeAreaView } from "react-native";
import styles from "./profileStyle";
import Header from "@/components/Header";
import { useAuth } from "@/utils/auth";

export default function Profile() {
    const { signOut } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <View>
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