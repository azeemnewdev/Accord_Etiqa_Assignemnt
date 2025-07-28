import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "./global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false, headerTitleAlign: 'center' }} />
        <Stack.Screen 
          name="repo/[id]"
          options={{
            headerShadowVisible: false,
            headerShown: true,
            headerBackTitle: 'Trending',           // <-- Legacy fallback
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
