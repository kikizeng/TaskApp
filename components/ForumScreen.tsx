import React from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { theme } from "./DesignSystem";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { dummyData } from "../dummyData";
import PostView from "./PostView";

const Stack = createStackNavigator();
const ForumScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flexBasis: 1 }}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 30,
        }}
      >
        <StatusBar style="auto" />
        <Text
          style={{
            fontFamily: "syne-semibold",
            fontSize: 25,
            color: theme.colors.charcoal,
            textAlign: "center",
          }}
        >
          Forum
        </Text>
        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.colors.lightGrey,
            borderRadius: 0,
          }}
        >
          <MaterialIcons
            name="search"
            size={24}
            color={theme.colors.charcoal}
            style={{ paddingLeft: 5, paddingRight: 2, opacity: 0.5 }}
          />
          <TextInput
            inlineImageLeft="search_icon"
            placeholder="Search"
            placeholderTextColor={theme.colors.charcoal}
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.lighterGrey,
              marginTop: 11,
              marginBottom: 12,
              fontSize: 14,
              fontFamily: "syne-bold",
              textTransform: "uppercase",
              color: theme.colors.charcoal,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 17,
          }}
        >
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.blue,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: theme.colors.offWhite,
                fontFamily: "syne-regular",
                fontSize: 14,
              }}
            >
              Tag 1
            </Text>
          </Button>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.lightGrey,
            }}
          >
            <Text
              style={{
                color: theme.colors.charcoal,
                fontFamily: "syne-regular",
                fontSize: 14,
              }}
            >
              Tag 2
            </Text>
          </Button>
        </View>
      </View>
      <View
        style={{ borderBottomWidth: 5, borderColor: theme.colors.lightGrey }}
      />
      <PostView postData={dummyData} touchable={true} />
    </ScrollView>
  );
};

export default ForumScreen;
