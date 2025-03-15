import { useEffect } from 'react';
import { Slot, useSegments, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from '../utils/auth';

export default function RootLayout() {
  const { isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!isSignedIn && !inAuthGroup) {
      router.replace('/(auth)');
    } else if (isSignedIn && inAuthGroup) {
      router.replace('/');
    }
  }, [isSignedIn, segments]);

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}

