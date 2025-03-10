import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Screens/Signup/index" options={{ headerShown: false }} />
      <Stack.Screen name="Screens/Signin/index" options={{ headerShown: false }} />
    </Stack>
  );
}
