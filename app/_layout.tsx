import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './index';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Stack.Navigator>
        <Stack.Screen name="index" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </SafeAreaView>
  );
}
