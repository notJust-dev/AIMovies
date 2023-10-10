import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

const RootLayout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ title: 'Movie Details' }} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
