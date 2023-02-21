import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  Button,
  DefaultTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/HomeScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    "syne-semibold": require("./assets/fonts/Syne-SemiBold.ttf"),
    "syne-regular": require("./assets/fonts/Syne-Regular.ttf"),
  });
};

type Theme = typeof DefaultTheme;
// Design system
const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "syne-regular",
    },
    semibold: {
      fontFamily: "syne-semibold",
      fontWeight: "semibold",
    },
  },
  colors: {
    ...DefaultTheme.colors,
    white: "#F8F8F8",
    charcoal: "#383939",
    offWhite: "#FFFFFF",
    lightGrey: "#E8E8E8",
    black: "#000000",
    darkGrey: "#707070",
    blue: "#6537FF",
    error: "#B00020",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: " " }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Test = () => {
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
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <View>
          <View style={{ width: 414, height: undefined }}>
            <Image
              source={require("./assets/mask-group.png")}
              style={{ width: "100%", height: undefined, aspectRatio: 1 }}
            />
          </View>
          <View
            style={{
              paddingTop: 51,
              paddingLeft: 30,
              paddingRight: 30,
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "syne-semibold",
                color: theme.colors.charcoal,
                fontSize: 25,
              }}
            >
              Welcome to
            </Text>
            <Text
              style={{
                fontFamily: "syne-semibold",
                color: theme.colors.charcoal,
                fontSize: 25,
              }}
            >
              the NBM Forum
            </Text>
            <Text
              style={{
                fontFamily: "syne-regular",
                color: theme.colors.charcoal,
                fontSize: 14,
              }}
            >
              Time to get all the answers you need in a forum made for designers
              and developers!
            </Text>
          </View>
          <View
            style={{
              paddingTop: 39,
              paddingLeft: 30,
              paddingRight: 30,
              alignItems: "flex-start",
            }}
          >
            <Button
              style={{
                width: 320,
                backgroundColor: theme.colors.blue,
                alignItems: "center",
                borderRadius: 0,
                borderColor: theme.colors.charcoal,
              }}
              mode="contained"
              onPress={() => console.log("clicked")}
            >
              <Text
                style={{
                  fontFamily: "syne-regular",
                  fontSize: 14,
                }}
              >
                Jump In!
              </Text>
            </Button>
          </View>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
