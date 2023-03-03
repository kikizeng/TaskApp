import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const smallContainer = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export const loadFonts = async () => {
  await Font.loadAsync({
    "syne-bold": require("../assets/fonts/Syne-Bold.ttf"),
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
    bold: {
      fontFamily: "syne-bold",
      fontWeight: "bold",
    },
  },
  colors: {
    ...DefaultTheme.colors,
    offWhite: "#FFFFFF",
    darkerGrey: "#0000005C",
    black: "#000000",
    charcoal: "#383939",
    lightGrey: "#E8E8E8",
    lighterGrey: "#EFEFEF",
    blue: "#6537FF",
  },
};
