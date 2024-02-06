import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Home } from "@/screens/Home";
import theme from "@/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? (
          <Home />
        ) : (
          <ActivityIndicator color="#fff" size="large" />
        )}
      </ThemeProvider>
    </View>
  );
}
