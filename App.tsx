import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import { loadFonts } from "./components/DesignSystem";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./components/SplashScreen";
import * as Splash from "expo-splash-screen";
import ForumScreen from "./components/ForumScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    const hideSplashScreen = async () => {
      await Splash.hideAsync();
      setLoading(false);
    };

    setTimeout(hideSplashScreen, 3000);
  }, []);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <SafeAreaProvider>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ForumScreen" component={ForumScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};

export default App;
