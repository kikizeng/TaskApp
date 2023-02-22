import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import * as Splash from "expo-splash-screen";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./DesignSystem";

type SplashScreenProps = {};

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          width: undefined,
          height: "100%",
          backgroundColor: theme.colors.blue,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Loading</Text>
      </View>
    </PaperProvider>
  );
};

export default SplashScreen;
