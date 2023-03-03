import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { theme } from "./DesignSystem";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { dummyData, TAGS } from "../dummyData";
import PostView from "./PostView";

const Stack = createStackNavigator();
const ForumScreen: React.FC = () => {
  const navigation = useNavigation();
  // const [active, setActive] = useState(false);
  const [active, setActive] = useState<boolean[]>(
    Array(TAGS.length).fill(false)
  );
  const handleTagPress = (index: number) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };
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
          {TAGS?.map((tag: string, i: number) => (
            <Button
              onPress={() => handleTagPress(i)}
              key={`tag-${i}`}
              style={{
                borderRadius: 0,
                backgroundColor: active[i]
                  ? theme.colors.blue
                  : theme.colors.lightGrey,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: active[i]
                    ? theme.colors.offWhite
                    : theme.colors.charcoal,
                  fontFamily: "syne-regular",
                  fontSize: 14,
                }}
              >
                {tag}
              </Text>
            </Button>
          ))}
        </View>
      </View>
      <View
        style={{ borderBottomWidth: 5, borderColor: theme.colors.lightGrey }}
      />
      <PostView postData={dummyData} touchable={true} hideTitle={true} />
    </ScrollView>
  );
};

export default ForumScreen;
