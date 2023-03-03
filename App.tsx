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
import SinglePostScreen from "./components/SinglePostScreen";

const Stack = createNativeStackNavigator();
const ForumStack = createNativeStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpa2lAZW1haWwuY29tIiwiaWQiOjIsImlhdCI6MTY3NzAyOTM0OSwiZXhwIjoxNjc5NjIxMzQ5fQ.mcdeoas5v23xAe5oT1lbtxriICsQVGLDyq6I3Aa5NJo";

  useEffect(() => {
    const hideSplashScreen = async () => {
      await Splash.hideAsync();
      setLoading(false);
    };
    setTimeout(hideSplashScreen, 3000);
  }, []);

  useEffect(() => {
    fetch("http://3.26.31.47:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + TOKEN,
        Authorization: TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(posts);
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
            <Stack.Screen name="ForumScreen" options={{ headerShown: false }}>
              {() => (
                <ForumStack.Navigator>
                  <ForumStack.Screen
                    name="Forum"
                    component={ForumScreen}
                    initialParams={{ posts: posts }}
                    options={{ headerShown: false }}
                  />
                  <ForumStack.Screen
                    name="SinglePost"
                    component={SinglePostScreen}
                    options={{ headerShown: false }}
                  />
                </ForumStack.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};

export default App;
