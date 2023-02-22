import React from "react";
import { View, Image, Text } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";
import { theme } from "./DesignSystem";
import { StatusBar } from "expo-status-bar";
import LandingSvg from "../assets/LandingSvg";

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props;
  return (
    <PaperProvider theme={theme}>
      <View>
        <View style={{ width: 414, height: undefined, position: "relative" }}>
          <Image
            source={require("../assets/mask-group.png")}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1,
            }}
          />
          <LandingSvg
            style={{
              transform: [{ rotate: "45deg" }],
              position: "absolute",
              bottom: 80,
              left: 90,
            }}
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
            onPress={() => navigation.navigate("ForumScreen")}
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
  );
};

export default HomeScreen;
