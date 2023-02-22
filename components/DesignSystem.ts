import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import {
  Button,
  DefaultTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const loadFonts = async () => {
  await Font.loadAsync({
    "syne-semibold": require("../assets/fonts/Syne-SemiBold.ttf"),
    "syne-regular": require("../assets/fonts/Syne-Regular.ttf"),
  });
};

export const theme = {
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
